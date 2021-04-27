import {Mobile} from './Mobile';

let movil_1:Mobile = new Mobile('movil 1','nokia 3210', 'nokia', 150,'gris',false,5545,3);
let movil_2:Mobile = new Mobile('movil 2','iphone 3g', 'apple', 300,'blanco',false,6978,40);
let movil_3:Mobile = new Mobile('movil 3','samsung galaxy', 'samsung', 500,'azul',true,9854,120);

console.log(movil_1);
console.log(movil_2);
console.log(movil_3);

movil_1.is5G = true;
movil_1.cameraNumber = 4;

console.log(movil_1);