export class BreadCrumbsModel{
    public route:string;
    public value:string;
    constructor(options:{route:string,value:string}){
        this.route=options.route
        this.value=options.value
    }
}