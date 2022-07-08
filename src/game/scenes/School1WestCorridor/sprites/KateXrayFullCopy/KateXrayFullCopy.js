
        import _KateXrayFullCopy from './images/KateXrayFullCopy.png'
let paths = [
        ['School1WestCorridor_KateXrayFullCopy', _KateXrayFullCopy, 54],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./KateXrayFullCopy_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "KateXrayFullCopy"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1149;
export const Y = 253;
export const Height = 774;
export const Interactive= true
export const Width = 268;
export const Alpha = 1;
export let Scale = 1;

 
