
        import _DoorvineStrawberry from './images/DoorvineStrawberry.png'
let paths = [
        ['Vines_DoorvineStrawberry', _DoorvineStrawberry, 119],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./DoorvineStrawberry_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "DoorvineStrawberry"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1466;
export const Y = 0;
export const Height = 1080;
export const Interactive= true
export const Width = 454;
export const Alpha = 1;
export let Scale = 1;

 
