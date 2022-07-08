
        import _LeftbackLamp from './images/LeftbackLamp.png'
let paths = [
        ['SchoolEntrance_LeftbackLamp', _LeftbackLamp, 34],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./LeftbackLamp_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "LeftbackLamp"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 790;
export const Y = 616;
export const Height = 207;
export const Interactive= true
export const Width = 23;
export const Alpha = 1;
export let Scale = 1;

 
