
        import _ReachingVine from './images/ReachingVine.png'
let paths = [
        ['SchoolAdminWing_ReachingVine', _ReachingVine, 30],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./ReachingVine_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "ReachingVine"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 159;
export const Y = 739;
export const Height = 195;
export const Interactive= true
export const Width = 362;
export const Alpha = 1;
export let Scale = 1;

 
