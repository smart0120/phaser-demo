
        import _RightLamp from './images/RightLamp.png'
let paths = [
        ['SchoolEntrance_RightLamp', _RightLamp, 36],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./RightLamp_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "RightLamp"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1321;
export const Y = 604;
export const Height = 409;
export const Interactive= true
export const Width = 47;
export const Alpha = 1;
export let Scale = 1;

 
