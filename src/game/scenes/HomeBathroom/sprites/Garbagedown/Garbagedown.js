
        import _Garbagedown from './images/Garbagedown.png'
let paths = [
        ['HomeBathroom_Garbagedown', _Garbagedown, 34],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Garbagedown_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Garbagedown"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1287;
export const Y = 703;
export const Height = 95;
export const Interactive= true
export const Width = 118;
export const Alpha = 1;
export let Scale = 1;

 
