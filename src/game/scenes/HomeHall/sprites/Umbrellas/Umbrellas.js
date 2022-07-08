
        import _Umbrellas from './images/Umbrellas.png'
let paths = [
        ['HomeHall_Umbrellas', _Umbrellas, 27],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Umbrellas_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Umbrellas"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 592;
export const Y = 457;
export const Height = 126;
export const Interactive= true
export const Width = 68;
export const Alpha = 1;
export let Scale = 1;

 
