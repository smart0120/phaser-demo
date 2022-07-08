
        import _Violin from './images/Violin.png'
let paths = [
        ['SchoolMusicClass_Violin', _Violin, 11],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Violin_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Violin"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1452;
export const Y = 596;
export const Height = 75;
export const Interactive= true
export const Width = 246;
export const Alpha = 1;
export let Scale = 1;

 
