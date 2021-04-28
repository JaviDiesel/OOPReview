import {Mobile} from './Mobile';
import {MobileLibrary} from './MobileLibrary';

let movil_1:Mobile = new Mobile('movil 1', 'nokia 3210', 'nokia', 1, 'gris', false, 0, 3);
let movil_2:Mobile = new Mobile('movil 2', 'iphone 3g', 'apple', 3,'blanco',false, 1, 40);
let movil_3:Mobile = new Mobile('movil 3', 'samsung galaxy', 'samsung', 3,'azul', true, 1, 120);
let movil_4:Mobile = new Mobile('movil 4', 'huawei mate 40 pro', 'huawei', 5, 'negro', true, 2, 1199);
let moviles:Mobile[] = [movil_1, movil_2, movil_3, movil_4];
let library:MobileLibrary = new MobileLibrary('library', 'madrid', moviles);

let p_print = ():void =>    {
    console.log(library.getName());
    console.log(library.getLocation());
    console.log(library.getMobiles());
    console.log(library.getTotalPrice());
    console.log('');
}

p_print();

library.setName('pepe library');
library.setLocation('teruel');
library.setMobiles([movil_1,movil_2]);
library.setTotalPrice(123);

p_print();