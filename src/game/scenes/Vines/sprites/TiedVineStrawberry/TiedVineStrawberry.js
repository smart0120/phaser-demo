
        import _TiedVineStrawberry from './images/TiedVineStrawberry.png'
let paths = [
        ['Vines_TiedVineStrawberry', _TiedVineStrawberry, 1],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./TiedVineStrawberry_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "TiedVineStrawberry"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1106;
export const Y = 659;
export const Height = 135;
export const Interactive= true
export const Width = 299;
export const Alpha = 1;
export let Scale = 1;

 
