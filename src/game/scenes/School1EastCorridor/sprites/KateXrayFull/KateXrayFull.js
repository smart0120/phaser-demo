
        import _KateXrayFull from './images/KateXrayFull.png'
let paths = [
        ['School1EastCorridor_KateXrayFull', _KateXrayFull, 50],
      
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
export const X = 1359;
export const Y = 414;
export const Height = 453;
export const Interactive= true
export const Width = 200;
export const Alpha = 1;
export let Scale = 1;

 
