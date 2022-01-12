import { Subject, Subscription } from "rxjs";

export default class Globals {

    private static data : Map<String, any> = new Map();
    private static dataSubject : Subject<Globals> = new Subject();

    public static watch( subscriber? : any, observer? : any ) {
        const subscription : Subscription = this.dataSubject.asObservable().subscribe( observer );        
    }

    static init() {
        Globals.set( 'page-not-found', false );
    }

    static set( valueName: String, value: any ) {
        Globals.data.set( valueName, value );
        this.dataSubject.next( this );
    }

    static get( valueName : String ) : any {
        if ( Globals.data.has( valueName ) ) {
            return Globals.data.get( valueName );
        }
        return false;
    }

    static setPageFound( value : boolean = true, flag : boolean = false ) {
        if ( flag ) {
            Globals.set( 'page-not-found', !value );
            Globals.set( 'page-not-found__f', value );
        }
        else {     
            if ( Globals.get( 'page-not-found__f' ) ) {
                Globals.set( 'page-not-found', !value );
            }
            Globals.set( 'page-not-found__f', value );
        }        
    }

    static isPageFound() : boolean {
        return !Globals.get( 'page-not-found' );
    }

}
Globals.init();