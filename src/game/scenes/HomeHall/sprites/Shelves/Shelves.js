
        import _Shelves from './images/Shelves.png'
let paths = [
        ['HomeHall_Shelves', _Shelves, 14],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Shelves_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Shelves"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1439;
export const Y = 274;
export const Height = 154;
export const Interactive= true
export const Width = 128;
export const Alpha = 1;
export let Scale = 1;

 
