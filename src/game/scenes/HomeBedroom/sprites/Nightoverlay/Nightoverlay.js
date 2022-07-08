
        import _Nightoverlay from './images/Nightoverlay.png'
let paths = [
        ['HomeBedroom_Nightoverlay', _Nightoverlay, 65],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Nightoverlay_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Nightoverlay"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 0;
export const Height = 1080;
export const Interactive= true
export const Width = 1920;
export const Alpha = 0.9019608;
export let Scale = 1;

 
