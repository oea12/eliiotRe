import Assets from '@/classes/Assets';
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component
export default class TopBar extends Vue {    
            
    private Assets = Assets;

    private isActive : boolean = this.$router.currentRoute.path.includes( 'faqs' );

    @Watch( '$route' )
    onRouterChanged() {
        this.isActive = this.$router.currentRoute.path.includes( 'faqs' );
    }
    
    private goTo( page : string ) {
        this.$router.push( page ).then(
            ()=>window.scrollTo(0,0)
        ).catch( ( err ) => {            
            window.scrollTo(0,0);
        });        
    }    
} 

