import router from '@/router';
import Base64 from './Base64';

import $ from 'jquery';

export default class Router {

    private static excludedPaths : Array<String> = new Array();

    public static path : string = '';
    private static pathWatches : Array<( path : string ) => void > = new Array();

    public static params : Array<string> = new Array();
    private static paramsWatches : Array< ( params : Array<string> ) => void > = new Array();

    public static init() {
        this.path = router.currentRoute.path;
    }

    public static watchPath( callback : ( path : string ) => void ) {
        Router.pathWatches.push( callback );
    }

    public static watchParams( callback : ( params : Array<string> ) => void ) {
        Router.paramsWatches.push( callback );
    }

    public static update() {        
        Router.path = router.currentRoute.path;

        Router.pathWatches.forEach( callback => callback( Router.path ) );
        Router.paramsWatches.forEach( callback => callback( Router.params ) );
    }

    public static goTo( path : string, object? : any, encode : boolean = false ) {        
        if ( ( router.currentRoute.path != path || object ) &&
            !Router.excludedPaths.includes( router.currentRoute.path ) ) {
            
            let queryString = '';
            if ( object ) {
                if ( router.currentRoute.path == path ) {
                    object.hash = Math.floor( ( Math.random() * 1000000 ) ) + 1;   
                }
                queryString = Object.keys( object ).map( key => key + '=' + object[ key ] ).join( '&' );                
                queryString = '?' + ( encode ? 'q=' + Base64.encode( queryString ) : queryString );
            }
            
            router.push( path + queryString, () => window.scrollTo( 0, 0 ) );

            if ( !$( '.navbar-toggler' ).hasClass( 'collapsed' ) ) {
                $( '.navbar-toggler' ).trigger( 'click' );
            }
        }
    }

    public static getParam( param : string, defaultValue : any = '' ) : string {
        if( router.currentRoute.params[ param ] ) {
            return router.currentRoute.params[ param ];
        }
        return defaultValue.toString();        
    }

    public static hasParam( param : string ) : boolean {
        return router.currentRoute.params[ param ] ? true : false;            
    }

    public static getQueryVar( varName : string, defaultValue : any = '' ) : any {
        if( router.currentRoute.query[ varName ] ) {
            return router.currentRoute.query[ varName ];
        }
        return defaultValue;
        
    }

    public static getQuery( decode : boolean = false ) : any {
        let query : any = router.currentRoute.query;        
        if ( decode && query.q )  {
            let decoded = Base64.decode( query.q );
            return this.parseQuery( decoded );        
        }
        return query;
    }

    public static addParamToURL( name : string, value : any ) {        
		router.currentRoute.params[ name ] = value.toString();	
        Router.recreateURL();	   
    }

    public static removeParamFromURL( name : string ) {
        delete router.currentRoute.params[ name ];
        Router.recreateURL();
    }

    public static addQueryToURL( name : string, value : any ) {
        var query = Object.assign( {}, router.currentRoute.query );
        
        if( query[name] && query[name]===value.toString()){
            return;
        }
        
        query[ name ] = value.toString();
        
        Router.recreateURL( query );
    }

    public static removeQueryFromURL( name : string ) {
        var query = Object.assign( {}, router.currentRoute.query );
        if( !query[name] ) {
            return;
        }
        delete query[ name ];
        
        Router.recreateURL( query );
    }

    private static recreateURL( query? : any ) {
        if( !query ) {
            query = router.currentRoute.query;
        }        
        router.replace( { params : router.currentRoute.params, query : query, hash : router.currentRoute.hash } );
		// var params = '';
		// for( var elem in router.currentRoute.params ) {
		// 	if( elem !== 'id' ) {
        //         if( params !== '' ) {
		// 			params += '&';
		// 		}
		// 		params += elem + '=' + router.currentRoute.params[elem];
		// 	}
		// }
		// router.replace( router.currentRoute.path + ( params !== '' ? '?' : '' ) + params + router.currentRoute.hash );             
    }

    public static loadJS( url : string, id : string, callback? : () => void ) {
        if ( document.getElementById( id ) ) {
            return;
        }
        let script = document.createElement( 'script' );
        script.setAttribute( 'src', url );
        script.setAttribute( 'id', id );

        if ( callback ) {
            script.addEventListener( 'load', () => { callback(); } );
        }

        document.head.appendChild( script ); 
    }

    public static goBack() {
        router.back();
    }

    private static parseQuery ( query : string ) {
        var res : any = {};
    
        query = query.trim().replace(/^(\?|#|&)/, '');
    
        if (!query) {
          return res
        }
    
        query.split('&').forEach(function (param) {
            var parts = param.replace(/\+/g, ' ').split('=');
            var key = decodeURIComponent( parts.shift()!.toString() );
            var val = parts.length > 0
                ? decodeURIComponent(parts.join('='))
                : null;
    
            if (res[key] === undefined) {
                res[key] = val;
            } else if (Array.isArray(res[key])) {
                res[key].push(val);
            } else {
                res[key] = [res[key], val];
            }
        });
    
        return res
      }    

}