
        import _Stove from './images/Stove.png'
let paths = [
        ['HomeKitchen_Stove', _Stove, 12],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Stove_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Stove"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 497;
export const Y = 227;
export const Height = 531;
export const Interactive= true
export const Width = 387;
export const Alpha = 1;
export let Scale = 1;

 
