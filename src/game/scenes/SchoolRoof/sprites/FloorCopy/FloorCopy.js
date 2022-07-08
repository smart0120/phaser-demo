
        import _FloorCopy from './images/FloorCopy.png'
let paths = [
        ['SchoolRoof_FloorCopy', _FloorCopy, 2],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./FloorCopy_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "FloorCopy"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 37;
export const Y = 306;
export const Height = 774;
export const Interactive= true
export const Width = 1883;
export const Alpha = 1;
export let Scale = 1;

 
