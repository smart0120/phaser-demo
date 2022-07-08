
        import _DiscoBall from './images/DiscoBall.png'
let paths = [
        ['SchoolMusicClass_DiscoBall', _DiscoBall, 14],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./DiscoBall_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "DiscoBall"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 793;
export const Y = 0;
export const Height = 352;
export const Interactive= true
export const Width = 329;
export const Alpha = 1;
export let Scale = 1;

 
