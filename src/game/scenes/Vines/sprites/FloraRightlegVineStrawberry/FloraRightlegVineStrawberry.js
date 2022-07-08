
        import _FloraRightlegVineStrawberry from './images/FloraRightlegVineStrawberry.png'
let paths = [
        ['Vines_FloraRightlegVineStrawberry', _FloraRightlegVineStrawberry, 83],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./FloraRightlegVineStrawberry_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "FloraRightlegVineStrawberry"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1159;
export const Y = 491;
export const Height = 589;
export const Interactive= true
export const Width = 287;
export const Alpha = 1;
export let Scale = 1;

 
