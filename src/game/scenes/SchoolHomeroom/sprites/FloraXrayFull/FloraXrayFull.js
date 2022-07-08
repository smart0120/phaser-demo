
        import _FloraXrayFull from './images/FloraXrayFull.png'
let paths = [
        ['SchoolHomeroom_FloraXrayFull', _FloraXrayFull, 38],
      
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
export const X = 1659;
export const Y = 447;
export const Height = 626;
export const Interactive= true
export const Width = 201;
export const Alpha = 1;
export let Scale = 1;

 
