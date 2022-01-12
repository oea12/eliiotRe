import { Component, Vue, Watch } from 'vue-property-decorator';
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

import Topbar from "@/components/Topbar/Topbar.vue";
import Footer from './components/Footer/Footer.vue';

@Component({
    components: {
        Topbar, Footer
    }
})
export default class App extends Vue {

    created() {}
}