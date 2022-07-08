
        import _Stairs from './images/Stairs.png'
let paths = [
        ['HomeHall_Stairs', _Stairs, 2],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Stairs_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Stairs"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 86;
export const Y = 707;
export const Height = 346;
export const Interactive= true
export const Width = 656;
export const Alpha = 1;
export let Scale = 1;

 
