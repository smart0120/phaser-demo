
        import _Plant from './images/Plant.png'
let paths = [
        ['SchoolRoofDoor_Plant', _Plant, 2],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Plant_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Plant"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 528;
export const Height = 553;
export const Interactive= true
export const Width = 442;
export const Alpha = 1;
export let Scale = 1;

 
