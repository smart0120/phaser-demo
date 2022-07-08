
        import _Furniture01 from './images/Furniture01.png'
let paths = [
        ['HomeKitchen_Furniture01', _Furniture01, 15],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Furniture01_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Furniture01"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 362;
export const Y = 227;
export const Height = 556;
export const Interactive= true
export const Width = 290;
export const Alpha = 1;
export let Scale = 1;

 
