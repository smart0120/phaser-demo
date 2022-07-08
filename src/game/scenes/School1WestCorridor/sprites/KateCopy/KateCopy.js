
        import _KateCopy from './images/KateCopy.png'
let paths = [
        ['School1WestCorridor_KateCopy', _KateCopy, 52],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./KateCopy_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "KateCopy"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1149;
export const Y = 253;
export const Height = 771;
export const Interactive= true
export const Width = 268;
export const Alpha = 1;
export let Scale = 1;

 
