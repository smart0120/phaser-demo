
        import _FurnitureRight from './images/FurnitureRight.png'
let paths = [
        ['SchoolEnglishClassroom_FurnitureRight', _FurnitureRight, 17],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./FurnitureRight_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "FurnitureRight"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1712;
export const Y = 365;
export const Height = 297;
export const Interactive= true
export const Width = 208;
export const Alpha = 1;
export let Scale = 1;

 
