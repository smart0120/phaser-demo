
        import _Pants from './images/Pants.png'
let paths = [
        ['HomeKitchen_Pants', _Pants, 36],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Pants_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Pants"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1294;
export const Y = 873;
export const Height = 170;
export const Interactive= true
export const Width = 359;
export const Alpha = 1;
export let Scale = 1;

 
