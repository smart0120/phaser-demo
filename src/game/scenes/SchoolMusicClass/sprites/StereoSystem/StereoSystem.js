
        import _StereoSystem from './images/StereoSystem.png'
let paths = [
        ['SchoolMusicClass_StereoSystem', _StereoSystem, 9],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./StereoSystem_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "StereoSystem"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1433;
export const Y = 516;
export const Height = 118;
export const Interactive= true
export const Width = 187;
export const Alpha = 1;
export let Scale = 1;

 
