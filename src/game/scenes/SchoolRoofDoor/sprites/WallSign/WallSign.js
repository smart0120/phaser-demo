
        import _WallSign from './images/WallSign.png'
let paths = [
        ['SchoolRoofDoor_WallSign', _WallSign, 3],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./WallSign_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "WallSign"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 77;
export const Y = 447;
export const Height = 145;
export const Interactive= true
export const Width = 199;
export const Alpha = 1;
export let Scale = 1;

 
