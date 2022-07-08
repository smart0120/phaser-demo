
        import _SauceLeft from './images/SauceLeft.png'
let paths = [
        ['HomeKitchen_SauceLeft', _SauceLeft, 25],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./SauceLeft_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "SauceLeft"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1087;
export const Y = 545;
export const Height = 73;
export const Interactive= true
export const Width = 25;
export const Alpha = 1;
export let Scale = 1;

 
