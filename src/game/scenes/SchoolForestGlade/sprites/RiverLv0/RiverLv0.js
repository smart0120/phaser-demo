
        import _RiverLv0 from './images/RiverLv0.png'
let paths = [
        ['SchoolForestGlade_RiverLv0', _RiverLv0, 12],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./RiverLv0_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "RiverLv0"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 735;
export const Height = 314;
export const Interactive= true
export const Width = 1920;
export const Alpha = 1;
export let Scale = 1;

 
