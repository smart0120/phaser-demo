
        import _FloraLeftlegVineStrawberry from './images/FloraLeftlegVineStrawberry.png'
let paths = [
        ['Vines_FloraLeftlegVineStrawberry', _FloraLeftlegVineStrawberry, 104],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./FloraLeftlegVineStrawberry_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "FloraLeftlegVineStrawberry"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 815;
export const Y = 432;
export const Height = 648;
export const Interactive= true
export const Width = 412;
export const Alpha = 1;
export let Scale = 1;

 
