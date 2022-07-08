
        import _FloraXrayFull from './images/FloraXrayFull.png'
let paths = [
        ['SchoolBathroom_FloraXrayFull', _FloraXrayFull, 29],
      
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
export const X = 220;
export const Y = 440;
export const Height = 518;
export const Interactive= true
export const Width = 281;
export const Alpha = 1;
export let Scale = 1;

 
