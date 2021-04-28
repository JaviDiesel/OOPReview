import {Mobile} from './Mobile';

export class MobileLibrary  {

    private name:string;
    private location:string;
    private mobiles:Mobile[];
    private totalPrice:number;

    constructor(name:string, location:string, mobiles:Mobile[]) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }

    public getName():string {
        return this.name;
    }
    public getLocation():string {
        return this.location;
    }
    public getMobiles():Mobile[]    {
        return this.mobiles;
    }
    public getTotalPrice():number   {
        return this.totalPrice;
    }

    public setName(name:string):void    {
        this.name = name;
    }
    public setLocation(location:string):void    {
        this.location = location;
    }
    public setMobiles(mobiles:Mobile[]):void    {
        this.mobiles = mobiles;
    }
    public setTotalPrice(totalPrice:number):void    {
        this.totalPrice = totalPrice;
    }

    private totalPriceCalculation():number   {
        let totalPrice = 0;
        for(let i=0;i<this.mobiles.length;i++)  {
            totalPrice += this.mobiles[i].getPrice();
        }
        return totalPrice;
    }

    public printLibrary():void  {
        console.log('This is all my mobiles');
        for(let i=0;i<this.mobiles.length;i++)  {
            this.mobiles[i].printMobile();
        }
        console.log('..........................');
        console.log(`Price overall: ${this.totalPrice}`);
    }
}