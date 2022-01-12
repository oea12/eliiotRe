export default class Assets {

    private static _notFoundImage : Boolean = false;

    public static getImage( image : string ) {
        if( !Assets._notFoundImage ) {
            require( '@/assets/images/' + image );
        }        
    }

    catchImageError() {
        Assets._notFoundImage = true;        
    }


}