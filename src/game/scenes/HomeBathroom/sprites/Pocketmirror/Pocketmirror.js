
        import _Pocketmirror from './images/Pocketmirror.png'
let paths = [
        ['HomeBathroom_Pocketmirror', _Pocketmirror, 36],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Pocketmirror_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Pocketmirror"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1393;
export const Y = 512;
export const Height = 48;
export const Interactive= true
export const Width = 51;
export const Alpha = 1;
export let Scale = 1;

 
