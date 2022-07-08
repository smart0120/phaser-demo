
        import _Door from './images/Door.png'
let paths = [
        ['HomeKitchen_Door', _Door, 11],
      
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
export const X = 175;
export const Y = 197;
export const Height = 572;
export const Interactive= true
export const Width = 224;
export const Alpha = 1;
export let Scale = 1;

 
