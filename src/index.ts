import {App} from "vue";
import NoixButton from "@/components/NoixButton.vue";


import "./app.css"
export default {
    install: (app: App) => {
        app.component("NoixButton", NoixButton)
    }
}