
        import _WindowOpen from './images/WindowOpen.png'
let paths = [
        ['School1FloorHall_WindowOpen', _WindowOpen, 19],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./WindowOpen_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "WindowOpen"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 525;
export const Y = 293;
export const Height = 419;
export const Interactive= true
export const Width = 137;
export const Alpha = 1;
export let Scale = 1;

 
