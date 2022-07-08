
        import _LeftLampOn from './images/LeftLampOn.png'
let paths = [
        ['SchoolEntrance_LeftLampOn', _LeftLampOn, 44],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./LeftLampOn_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "LeftLampOn"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 409;
export const Y = 586;
export const Height = 453;
export const Interactive= true
export const Width = 162;
export const Alpha = 1;
export let Scale = 1;

 
