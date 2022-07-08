
        import _Openvent from './images/Openvent.png'
let paths = [
        ['School1EastCorridor_Openvent', _Openvent, 11],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Openvent_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Openvent"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1455;
export const Y = 18;
export const Height = 192;
export const Interactive= true
export const Width = 202;
export const Alpha = 1;
export let Scale = 1;

 
