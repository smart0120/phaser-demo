
        import _FloraXrayFull from './images/FloraXrayFull.png'
let paths = [
        ['School1EastCorridor_FloraXrayFull', _FloraXrayFull, 60],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./FloraXrayFull_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "FloraXrayFull"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1052;
export const Y = 339;
export const Height = 394;
export const Interactive= true
export const Width = 115;
export const Alpha = 1;
export let Scale = 1;

 
