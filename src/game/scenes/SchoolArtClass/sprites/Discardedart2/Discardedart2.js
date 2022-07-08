
        import _Discardedart2 from './images/Discardedart2.png'
let paths = [
        ['SchoolArtClass_Discardedart2', _Discardedart2, 10],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Discardedart2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Discardedart2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1161;
export const Y = 835;
export const Height = 106;
export const Interactive= true
export const Width = 217;
export const Alpha = 1;
export let Scale = 1;

 
