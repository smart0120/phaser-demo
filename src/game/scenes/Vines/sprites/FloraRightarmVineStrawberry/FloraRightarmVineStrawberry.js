
        import _FloraRightarmVineStrawberry from './images/FloraRightarmVineStrawberry.png'
let paths = [
        ['Vines_FloraRightarmVineStrawberry', _FloraRightarmVineStrawberry, 47],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./FloraRightarmVineStrawberry_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "FloraRightarmVineStrawberry"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1106;
export const Y = 414;
export const Height = 339;
export const Interactive= true
export const Width = 299;
export const Alpha = 1;
export let Scale = 1;

 
