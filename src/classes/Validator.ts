export default class Validator {

    static isValidEmail( email : String  ) {
        const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;        
        
        return ( email == "") ? "" : ( reg.test( email.toString() ) ) ? true : false;
    }  

}