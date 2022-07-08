
        import _Fire from './images/Fire.png'
let paths = [
        ['HomeHall_Fire', _Fire, 17],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Fire_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Fire"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1517;
export const Y = 260;
export const Height = 20;
export const Interactive= true
export const Width = 22;
export const Alpha = 1;
export let Scale = 1;

 
