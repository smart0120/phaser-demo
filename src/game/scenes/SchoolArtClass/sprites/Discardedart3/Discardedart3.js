
        import _Discardedart3 from './images/Discardedart3.png'
let paths = [
        ['SchoolArtClass_Discardedart3', _Discardedart3, 9],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Discardedart3_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Discardedart3"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1371;
export const Y = 854;
export const Height = 127;
export const Interactive= true
export const Width = 248;
export const Alpha = 1;
export let Scale = 1;

 
