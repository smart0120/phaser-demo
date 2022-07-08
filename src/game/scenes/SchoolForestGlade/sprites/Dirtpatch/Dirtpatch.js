
        import _Dirtpatch from './images/Dirtpatch.png'
let paths = [
        ['SchoolForestGlade_Dirtpatch', _Dirtpatch, 77],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Dirtpatch_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Dirtpatch"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 195;
export const Y = 937;
export const Height = 95;
export const Interactive= true
export const Width = 185;
export const Alpha = 1;
export let Scale = 1;

 
