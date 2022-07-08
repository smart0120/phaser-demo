
        import _FloraLeftboobVineStrawberry from './images/FloraLeftboobVineStrawberry.png'
let paths = [
        ['Vines_FloraLeftboobVineStrawberry', _FloraLeftboobVineStrawberry, 10],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./FloraLeftboobVineStrawberry_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "FloraLeftboobVineStrawberry"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 394;
export const Y = 415;
export const Height = 596;
export const Interactive= true
export const Width = 743;
export const Alpha = 1;
export let Scale = 1;

 
