
        import _FloraCopia from './images/FloraCopia.png'
let paths = [
        ['SchoolEntrance_FloraCopia', _FloraCopia, 8],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./FloraCopia_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "FloraCopia"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 119;
export const Y = 732;
export const Height = 217;
export const Interactive= true
export const Width = 83;
export const Alpha = 1;
export let Scale = 1;

 
