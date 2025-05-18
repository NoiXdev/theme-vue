import NoixButton from "@/components/NoixButton.vue";

declare module '@vue/runtime-core' {

    export interface GlobalComponents {
        NoixButton: typeof NoixButton;
    }
}
export {}