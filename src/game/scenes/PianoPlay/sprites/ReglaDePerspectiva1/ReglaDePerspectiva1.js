
        import _ReglaDePerspectiva1 from './images/ReglaDePerspectiva1.png'
let paths = [
        ['PianoPlay_ReglaDePerspectiva1', _ReglaDePerspectiva1, 1],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./ReglaDePerspectiva1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "ReglaDePerspectiva1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = false
export const X = 0;
export const Y = 539;
export const Height = 32;
export const Interactive= true
export const Width = 454;
export const Alpha = 1;
export let Scale = 1;

 
