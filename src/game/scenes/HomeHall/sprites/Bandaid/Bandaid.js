
        import _Bandaid from './images/Bandaid.png'
let paths = [
        ['HomeHall_Bandaid', _Bandaid, 31],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bandaid_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bandaid"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1859;
export const Y = 568;
export const Height = 46;
export const Interactive= true
export const Width = 38;
export const Alpha = 1;
export let Scale = 1;

 
