
        import _Door from './images/Door.png'
let paths = [
        ['SchoolEntrance_Door', _Door, 9],
      
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
export const X = 890;
export const Y = 696;
export const Height = 107;
export const Interactive= true
export const Width = 72;
export const Alpha = 1;
export let Scale = 1;

 
