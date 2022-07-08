
        import _Saltlamp from './images/Saltlamp.png'
let paths = [
        ['HomeHall_Saltlamp', _Saltlamp, 18],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Saltlamp_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Saltlamp"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1457;
export const Y = 224;
export const Height = 69;
export const Interactive= true
export const Width = 44;
export const Alpha = 1;
export let Scale = 1;

 
