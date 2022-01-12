import { Component, Vue, Watch } from 'vue-property-decorator';
import { VueAgile } from "vue-agile";
import $ from 'jquery';

@Component({
    components: {
        VueAgile
    }
})
export default class HomePage extends Vue {    

    private timer : any;
    
    private testimonials : Array<{ text : String, author : String }> = [
        {
            text : 'Con Eliiot la atención fue 100% personalizada, decidí cuanto pagar al mes. El servicio de diez, con una asesoría super clara y entendible',
            author : 'RODOLFO LÓPEZ'
        },
        {
            text : 'Definitivamente me ayudaron a solucionar mi problema, incluso me ayudaron a encontrar un despacho de cobranza que ya no existía y estaba afectando a mi historial crediticio',
            author : 'YOLANDA PÉREZ'
        }
    ];

    private carouselContent : Array<{ text : String, author : String }> = [
        {
            text : 'Con Eliiot la atención fue 100% personalizada, decidí cuanto pagar al mes. El servicio de diez, con una asesoría super clara y entendible',
            author : 'RODOLFO LÓPEZ'
        },
        {
            text : 'Definitivamente me ayudaron a solucionar mi problema, incluso me ayudaron a encontrar un despacho de cobranza que ya no existía y estaba afectando a mi historial crediticio',
            author : 'YOLANDA PÉREZ'
        }
    ];

    private actualIndex = 0;
    private viewCarousel : boolean = false;

    setActualIndex( value : number ) { 
        // this.stop();       
        let testimonial = $( '.testimonial-content' );
        testimonial.fadeOut( 1000, () => this.actualIndex = Math.abs( value % this.testimonials.length ) ).fadeIn( 1000 );
        // this.start();
    }

    next() {
        this.setActualIndex( this.actualIndex + 1 );
    }

    prev() {
        this.setActualIndex( this.actualIndex - 1 );
    }

    start() {
        if( this.timer === undefined ) {
            this.timer = setInterval( () => this.next(), 5000 );
        }
    }

    stop() {
        clearInterval( this.timer );
        this.timer = undefined;
    }

    showCarousel() {
        this.viewCarousel = true;
    }

    hideCarousel() {
        this.viewCarousel = false;
    }

    mounted(){        
        // this.start();

        // let testimonial = $( '.testimonial-content' );
        // testimonial.on( {
        //     mouseenter : () => this.stop(),
        //     mouseleave : () => this.start()
        // });
    }

    destroy() {
        this.stop();
    }

    private shownAnswer : number = 0;    

    private goTo( page : string ) {
        this.$router.push( page ).then(
            () => window.scrollTo(0,0)
        ).catch( ( err ) => {
            window.scrollTo(0,0);
        });        
    }
}