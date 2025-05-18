<script setup lang="ts">
import {computed, reactive} from "vue";

interface Item {
    [key: string]: any;
}

const props = defineProps<{
    label?: string;
    options: Item[];
    modelValue: Item[];
    labelKey: string;
    idKey: string;
}>();
const emit = defineEmits<{
    (e: 'update:modelValue', value: Item[]): void;
}>();

const selection = reactive<{
    left: Item[];
    right: Item[];
}>({
    left: [],
    right: []
});

const availableItems = computed(() =>
    props.options.filter(
        o => !props.modelValue.some(s => s[props.idKey] === o[props.idKey])
    )
);

function isSelected(item: Item, side: 'left' | 'right'): boolean {
    return selection[side].some(i => i[props.idKey] === item[props.idKey]);
}

function toggleSelection(item: Item, side: 'left' | 'right') {
    const index = selection[side].findIndex(i => i[props.idKey] === item[props.idKey]);
    if (index >= 0) {
        selection[side].splice(index, 1);
    } else {
        selection[side].push(item);
    }
}

function moveSelected(from: 'left' | 'right') {
    const to = from === 'left' ? 'right' : 'left';
    if (from === 'left') {
        emit('update:modelValue', [...props.modelValue, ...selection[from]]);
    } else {
        emit(
            'update:modelValue',
            props.modelValue.filter(
                i => !selection[from].some(s => s[props.idKey] === i[props.idKey])
            )
        );
    }
    selection[from] = [];
}

function moveAll(from: 'left' | 'right') {
    if (from === 'left') {
        emit('update:modelValue', [...props.modelValue, ...availableItems.value]);
    } else {
        emit('update:modelValue', []);
    }
    selection[from] = [];
}
</script>

<template>
    <div class="mx-auto w-full mb-2">
        <div class=" bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 dark:text-white h-full">
            <div
                v-if="label"
                class="border-b border-white px-2 py-1 text-xl font-bold"
            >
                {{ label }}
            </div>
            <div class="flex gap-4">
                <!-- Left List -->
                <div class="w-1/2 border rounded p-2">
                    <div class="font-semibold mb-2">Verfügbar</div>
                    <ul class="max-h-[300px] overflow-auto">
                        <li
                            v-for="item in availableItems"
                            :key="item[idKey]"
                            @click="toggleSelection(item, 'left')"
                            :class="[
            'cursor-pointer px-2 py-1 rounded my-0.5',
            isSelected(item, 'left') ? 'bg-blue-100 text-black' : 'hover:bg-gray-100 hover:text-black'
          ]"
                        >
                            {{ item[labelKey] }}
                        </li>
                    </ul>
                </div>

                <!-- Buttons -->
                <div class="flex flex-col justify-center gap-2">
                    <button class="btn" @click="moveSelected('left')">></button>
                    <button class="btn" @click="moveSelected('right')"><</button>
                    <button class="btn" @click="moveAll('left')">>></button>
                    <button class="btn" @click="moveAll('right')"><<</button>
                </div>

                <!-- Right List -->
                <div class="w-1/2 border rounded p-2">
                    <div class="font-semibold mb-2">Ausgewählt</div>
                    <ul class="max-h-[300px] overflow-auto">
                        <li
                            v-for="item in modelValue"
                            :key="item[idKey]"
                            @click="toggleSelection(item, 'right')"
                            :class="[
            'cursor-pointer px-2 py-1 rounded my-0.5',
            isSelected(item, 'right') ? 'bg-blue-100 text-black' : 'hover:bg-gray-100 hover:text-black'
          ]"
                        >
                            {{ item[labelKey] }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
