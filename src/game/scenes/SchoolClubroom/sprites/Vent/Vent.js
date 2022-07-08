
        import _Vent from './images/Vent.png'
let paths = [
        ['SchoolClubroom_Vent', _Vent, 8],
      
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
export const X = 118;
export const Y = 865;
export const Height = 62;
export const Interactive= true
export const Width = 242;
export const Alpha = 1;
export let Scale = 1;

 
