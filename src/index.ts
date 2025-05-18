import {App} from "vue";
import "./app.css"

import NoixButton from "@/components/NoixButton.vue";

export { NoixButton };

export default {
    install: (app: App) => {
        app.component("NoixButton", NoixButton)
    }
}