export class Mobile {

    private name:string;
    private model:string;
    private trademark:string;
    private sdSize:number;
    private color:string;
    private is5G:boolean;
    private cameraNumber:number;
    private price:number;

    constructor(name:string, model:string, trademark:string, sdSize:number, color:string, is5G:boolean, cameraNumber:number, price:number)  {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }

    public getName():string {
        return this.name;
    }
    public getModel():string    {
        return this.model;
    }
    public getTrademark():string   {
        return this.trademark;
    }
    public getSdSize():number   {
        return this.sdSize;
    }
    public getColor():string    {
        return this.color;
    }
    public getIs5G():boolean {
        return this.is5G;
    }
    public getCameraNumber():number    {
        return this.cameraNumber;
    }
    public getPrice():number    {
        return this.price;
    }

    public setName(name):void   {
        this.name = name;
    }
    public setModel(model):void   {
        this.model = model;
    }
    public setTrademark(trademark):void   {
        this.trademark = trademark;
    }
    public setSdSize(sdSize):void   {
        this.sdSize = sdSize;
    }
    public setColor(color):void   {
        this.color = color;
    }
    public setIs5G(is5G):void   {
        this.is5G = is5G;
    }
    public setCameraNumber(cameraNumber):void   {
        this.cameraNumber = cameraNumber;
    }
    public setPrice(price):void {
        this.price = price;
    }

    public printMobile():void   {
        console.log(`The characteristics of the mobile ${this.name} are:`);
        console.log(`Name: ${this.name}`);
        console.log(`Model: ${this.model}`);
        console.log(`Trademark: ${this.trademark}`);
        console.log(`SD Size: ${this.sdSize}`);
        console.log(`Color: ${this.color}`);
        console.log(`Is 5g?: ${this.is5G}`);
        console.log(`Number of Cameras: ${this.cameraNumber}`);
        console.log('');
    }
}