
        import _FloraLeftarmVine from './images/FloraLeftarmVine.png'
let paths = [
        ['Vines_FloraLeftarmVine', _FloraLeftarmVine, 116],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./FloraLeftarmVine_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "FloraLeftarmVine"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 197;
export const Y = 189;
export const Height = 564;
export const Interactive= true
export const Width = 873;
export const Alpha = 1;
export let Scale = 1;

 
