
        import _FurnitureBack from './images/FurnitureBack.png'
let paths = [
        ['SchoolEnglishClassroom_FurnitureBack', _FurnitureBack, 14],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./FurnitureBack_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "FurnitureBack"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 285;
export const Y = 383;
export const Height = 237;
export const Interactive= true
export const Width = 172;
export const Alpha = 1;
export let Scale = 1;

 
