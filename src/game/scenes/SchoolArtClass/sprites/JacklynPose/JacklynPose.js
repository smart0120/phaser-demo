
        import _JacklynPose from './images/JacklynPose.png'
let paths = [
        ['SchoolArtClass_JacklynPose', _JacklynPose, 44],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./JacklynPose_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "JacklynPose"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 333;
export const Y = 381;
export const Height = 363;
export const Interactive= true
export const Width = 170;
export const Alpha = 1;
export let Scale = 1;

 
