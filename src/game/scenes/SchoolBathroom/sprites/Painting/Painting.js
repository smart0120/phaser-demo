
        import _Painting from './images/Painting.png'
let paths = [
        ['SchoolBathroom_Painting', _Painting, 18],
      
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
export const Height = 563;
export const Interactive= true
export const Width = 157;
export const Alpha = 1;
export let Scale = 1;

 
