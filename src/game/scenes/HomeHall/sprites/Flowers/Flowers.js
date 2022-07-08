
        import _Flowers from './images/Flowers.png'
let paths = [
        ['HomeHall_Flowers', _Flowers, 35],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Flowers_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Flowers"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 320;
export const Y = 288;
export const Height = 179;
export const Interactive= true
export const Width = 109;
export const Alpha = 1;
export let Scale = 1;

 
