import {App} from "vue";
import "./app.css"

import NoixButton from "@/components/NoixButton.vue";
import NoixCard from "@/components/NoixCard.vue";
import NoixCheckbox from "@/components/NoixCheckbox.vue";
import NoixPasswordInput from "@/components/NoixPasswordInput.vue";
import NoixPicklist from "@/components/NoixPicklist.vue";
import NoixTextInput from "@/components/NoixTextInput.vue";
import NoixToggle from "@/components/NoixToggle.vue";

export {
    NoixButton,
    NoixCard,
    NoixCheckbox,
    NoixPasswordInput,
    NoixPicklist,
    NoixTextInput,
    NoixToggle,
};

export default {
    install: (app: App) => {
        app.component("NoixButton", NoixButton)
        app.component("NoixCard", NoixCard)
        app.component("NoixCheckbox", NoixCheckbox)
        app.component("NoixPasswordInput", NoixPasswordInput)
        app.component("NoixPicklist", NoixPicklist)
        app.component("NoixTextInput", NoixTextInput)
        app.component("NoixToggle", NoixToggle)
    }
}