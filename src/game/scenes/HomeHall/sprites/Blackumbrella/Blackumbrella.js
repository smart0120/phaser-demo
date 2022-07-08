
        import _Blackumbrella from './images/Blackumbrella.png'
let paths = [
        ['HomeHall_Blackumbrella', _Blackumbrella, 28],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Blackumbrella_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Blackumbrella"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 624;
export const Y = 451;
export const Height = 38;
export const Interactive= true
export const Width = 33;
export const Alpha = 1;
export let Scale = 1;

 
