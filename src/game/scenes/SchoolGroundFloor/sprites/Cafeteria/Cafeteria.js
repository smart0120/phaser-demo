
        import _Cafeteria from './images/Cafeteria.png'
let paths = [
        ['SchoolGroundFloor_Cafeteria', _Cafeteria, 12],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Cafeteria_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Cafeteria"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1140;
export const Y = 513;
export const Height = 158;
export const Interactive= true
export const Width = 177;
export const Alpha = 1;
export let Scale = 1;

 
