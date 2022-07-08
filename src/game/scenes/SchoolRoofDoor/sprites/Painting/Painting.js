
        import _Painting from './images/Painting.png'
let paths = [
        ['SchoolRoofDoor_Painting', _Painting, 4],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Painting_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Painting"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 0;
export const Height = 222;
export const Interactive= true
export const Width = 102;
export const Alpha = 1;
export let Scale = 1;

 
