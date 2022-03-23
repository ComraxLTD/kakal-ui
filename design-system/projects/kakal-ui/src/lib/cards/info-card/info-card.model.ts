export class InfoCardModel {
    public icon:string;
    public headline:string;
    public subHeadline?:string;

    constructor(options:{icon:string,headline:string,subHeadline?:string}){
        this.icon=options.icon;
        this.headline=options.headline;
        this.subHeadline=options?.subHeadline;
    }
}