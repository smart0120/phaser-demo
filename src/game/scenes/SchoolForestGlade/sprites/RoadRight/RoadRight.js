
        import _RoadRight from './images/RoadRight.png'
let paths = [
        ['SchoolForestGlade_RoadRight', _RoadRight, 6],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./RoadRight_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "RoadRight"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1481;
export const Y = 654;
export const Height = 105;
export const Interactive= true
export const Width = 439;
export const Alpha = 1;
export let Scale = 1;

 
