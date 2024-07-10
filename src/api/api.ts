export class Api {

    get(url:string) {
       return fetch(url); 
    }
}