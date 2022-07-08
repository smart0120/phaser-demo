
        import _FloraXrayFull from './images/FloraXrayFull.png'
let paths = [
        ['SchoolArtClass_FloraXrayFull', _FloraXrayFull, 33],
      
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
export const X = 656;
export const Y = 345;
export const Height = 311;
export const Interactive= true
export const Width = 128;
export const Alpha = 1;
export let Scale = 1;

 
