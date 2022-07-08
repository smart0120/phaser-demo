
        import _Lampground from './images/Lampground.png'
let paths = [
        ['HomeHall_Lampground', _Lampground, 25],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Lampground_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Lampground"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1405;
export const Y = 638;
export const Height = 128;
export const Interactive= true
export const Width = 107;
export const Alpha = 1;
export let Scale = 1;

 
