
        import _Vent from './images/Vent.png'
let paths = [
        ['SchoolNurseRoom_Vent', _Vent, 15],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Vent_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Vent"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1192;
export const Y = 536;
export const Height = 104;
export const Interactive= true
export const Width = 422;
export const Alpha = 1;
export let Scale = 1;

 
