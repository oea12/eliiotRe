import Assets from '@/classes/Assets';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {    
            
    private Assets = Assets;

    private goTo( page : string ) {
        this.$router.push( page ).then(
            ()=>window.scrollTo(0,0)
        ).catch( ( err ) => {
            window.scrollTo(0,0);
        });        
    }
} 

