
        import _Coathanger from './images/Coathanger.png'
let paths = [
        ['HomeHall_Coathanger', _Coathanger, 26],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Coathanger_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Coathanger"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 642;
export const Y = 361;
export const Height = 215;
export const Interactive= true
export const Width = 59;
export const Alpha = 1;
export let Scale = 1;

 
