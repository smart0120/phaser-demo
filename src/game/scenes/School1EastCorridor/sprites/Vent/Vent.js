
        import _Vent from './images/Vent.png'
let paths = [
        ['School1EastCorridor_Vent', _Vent, 10],
      
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
export const X = 1512;
export const Y = 18;
export const Height = 192;
export const Interactive= true
export const Width = 145;
export const Alpha = 1;
export let Scale = 1;

 
