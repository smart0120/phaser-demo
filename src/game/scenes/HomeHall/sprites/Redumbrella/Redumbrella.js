
        import _Redumbrella from './images/Redumbrella.png'
let paths = [
        ['HomeHall_Redumbrella', _Redumbrella, 29],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Redumbrella_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Redumbrella"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 598;
export const Y = 448;
export const Height = 46;
export const Interactive= true
export const Width = 41;
export const Alpha = 1;
export let Scale = 1;

 
