
        import _Basket from './images/Basket.png'
let paths = [
        ['SchoolBathroom_Basket', _Basket, 17],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Basket_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Basket"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 942;
export const Y = 697;
export const Height = 197;
export const Interactive= true
export const Width = 144;
export const Alpha = 1;
export let Scale = 1;

 
