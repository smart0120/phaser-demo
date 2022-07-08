
        import _Sword from './images/Sword.png'
let paths = [
        ['HomeHall_Sword', _Sword, 32],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Sword_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Sword"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 715;
export const Y = 407;
export const Height = 32;
export const Interactive= true
export const Width = 162;
export const Alpha = 1;
export let Scale = 1;

 
