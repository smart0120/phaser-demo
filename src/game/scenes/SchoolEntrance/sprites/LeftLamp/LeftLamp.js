
        import _LeftLamp from './images/LeftLamp.png'
let paths = [
        ['SchoolEntrance_LeftLamp', _LeftLamp, 33],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./LeftLamp_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "LeftLamp"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 468;
export const Y = 604;
export const Height = 407;
export const Interactive= true
export const Width = 47;
export const Alpha = 1;
export let Scale = 1;

 
