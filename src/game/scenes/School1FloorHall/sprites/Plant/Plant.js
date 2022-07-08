
        import _Plant from './images/Plant.png'
let paths = [
        ['School1FloorHall_Plant', _Plant, 17],
      
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
export const X = 1727;
export const Y = 520;
export const Height = 248;
export const Interactive= true
export const Width = 180;
export const Alpha = 1;
export let Scale = 1;

 
