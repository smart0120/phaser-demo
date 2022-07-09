
        import _FloraDown from './images/FloraDown.png'
let paths = [
        ['Vines_FloraDown', _FloraDown, 164],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./FloraDown_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "FloraDown"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = false
export const X = 854;
export const Y = 566;
export const Height = 334;
export const Interactive= true
export const Width = 407;
export const Alpha = 1;
export let Scale = 1;

 
