
        import _RightLampOn from './images/RightLampOn.png'
let paths = [
        ['SchoolEntrance_RightLampOn', _RightLampOn, 46],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./RightLampOn_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "RightLampOn"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1261;
export const Y = 586;
export const Height = 453;
export const Interactive= true
export const Width = 162;
export const Alpha = 1;
export let Scale = 1;

 
