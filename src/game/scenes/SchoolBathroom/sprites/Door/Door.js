
        import _Door from './images/Door.png'
let paths = [
        ['SchoolBathroom_Door', _Door, 8],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Door_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Door"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1003;
export const Y = 275;
export const Height = 392;
export const Interactive= true
export const Width = 176;
export const Alpha = 1;
export let Scale = 1;

 
