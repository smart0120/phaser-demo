
        import _Podium from './images/Podium.png'
let paths = [
        ['SchoolMusicClass_Podium', _Podium, 5],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Podium_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Podium"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 927;
export const Y = 398;
export const Height = 246;
export const Interactive= true
export const Width = 124;
export const Alpha = 1;
export let Scale = 1;

 
