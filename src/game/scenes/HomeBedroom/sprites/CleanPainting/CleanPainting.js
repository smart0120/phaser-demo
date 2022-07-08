
        import _CleanPainting from './images/CleanPainting.png'
let paths = [
        ['HomeBedroom_CleanPainting', _CleanPainting, 3],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./CleanPainting_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "CleanPainting"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 197;
export const Y = 150;
export const Height = 278;
export const Interactive= true
export const Width = 256;
export const Alpha = 1;
export let Scale = 1;

 
