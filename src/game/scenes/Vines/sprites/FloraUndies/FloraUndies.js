
        import _FloraUndies from './images/FloraUndies.png'
let paths = [
        ['Vines_FloraUndies', _FloraUndies, 8],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./FloraUndies_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "FloraUndies"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1073;
export const Y = 410;
export const Height = 170;
export const Interactive= true
export const Width = 115;
export const Alpha = 1;
export let Scale = 1;

 
