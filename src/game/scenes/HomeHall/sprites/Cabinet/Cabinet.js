
        import _Cabinet from './images/Cabinet.png'
let paths = [
        ['HomeHall_Cabinet', _Cabinet, 13],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Cabinet_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Cabinet"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1089;
export const Y = 298;
export const Height = 275;
export const Interactive= true
export const Width = 166;
export const Alpha = 1;
export let Scale = 1;

 
