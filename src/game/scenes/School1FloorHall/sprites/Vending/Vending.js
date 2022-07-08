
        import _Vending from './images/Vending.png'
let paths = [
        ['School1FloorHall_Vending', _Vending, 25],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Vending_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Vending"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1422;
export const Y = 378;
export const Height = 510;
export const Interactive= true
export const Width = 301;
export const Alpha = 1;
export let Scale = 1;

 
