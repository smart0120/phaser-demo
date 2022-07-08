
        import _FloraTorsoVine from './images/FloraTorsoVine.png'
let paths = [
        ['Vines_FloraTorsoVine', _FloraTorsoVine, 29],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./FloraTorsoVine_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "FloraTorsoVine"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 716;
export const Y = 440;
export const Height = 433;
export const Interactive= true
export const Width = 465;
export const Alpha = 1;
export let Scale = 1;

 
