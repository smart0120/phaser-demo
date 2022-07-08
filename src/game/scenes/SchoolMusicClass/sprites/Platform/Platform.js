
        import _Platform from './images/Platform.png'
let paths = [
        ['SchoolMusicClass_Platform', _Platform, 2],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Platform_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Platform"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 456;
export const Y = 548;
export const Height = 162;
export const Interactive= true
export const Width = 1177;
export const Alpha = 1;
export let Scale = 1;

 
