
        import _Doorright from './images/Doorright.png'
let paths = [
        ['HomeHall_Doorright', _Doorright, 6],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Doorright_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Doorright"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1512;
export const Y = 63;
export const Height = 1017;
export const Interactive= true
export const Width = 320;
export const Alpha = 1;
export let Scale = 1;

 
