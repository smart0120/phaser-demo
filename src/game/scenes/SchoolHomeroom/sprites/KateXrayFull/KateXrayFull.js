
        import _KateXrayFull from './images/KateXrayFull.png'
let paths = [
        ['SchoolHomeroom_KateXrayFull', _KateXrayFull, 27],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./KateXrayFull_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "KateXrayFull"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1329;
export const Y = 494;
export const Height = 327;
export const Interactive= true
export const Width = 175;
export const Alpha = 1;
export let Scale = 1;

 
