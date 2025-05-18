import {createApp} from "vue";
import App from "./App.vue";
import Theme from '../src';


const app = createApp(App);
app.use(Theme)
app.mount('#app')

export default app