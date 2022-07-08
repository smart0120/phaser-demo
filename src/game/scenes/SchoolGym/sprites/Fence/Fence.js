
        import _Fence from './images/Fence.png'
let paths = [
        ['SchoolGym_Fence', _Fence, 8],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Fence_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Fence"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 259;
export const Height = 421;
export const Interactive= true
export const Width = 1259;
export const Alpha = 1;
export let Scale = 1;

 
