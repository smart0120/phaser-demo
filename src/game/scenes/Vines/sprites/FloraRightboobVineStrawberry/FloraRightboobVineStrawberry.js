
        import _FloraRightboobVineStrawberry from './images/FloraRightboobVineStrawberry.png'
let paths = [
        ['Vines_FloraRightboobVineStrawberry', _FloraRightboobVineStrawberry, 54],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./FloraRightboobVineStrawberry_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "FloraRightboobVineStrawberry"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1142;
export const Y = 415;
export const Height = 665;
export const Interactive= true
export const Width = 478;
export const Alpha = 1;
export let Scale = 1;

 