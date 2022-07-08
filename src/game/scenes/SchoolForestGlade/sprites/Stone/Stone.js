
        import _Stone from './images/Stone.png'
let paths = [
        ['SchoolForestGlade_Stone', _Stone, 18],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Stone_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Stone"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 237;
export const Y = 641;
export const Height = 439;
export const Interactive= true
export const Width = 1616;
export const Alpha = 1;
export let Scale = 1;

 
