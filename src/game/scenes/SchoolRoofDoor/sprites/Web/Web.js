
        import _Web from './images/Web.png'
let paths = [
        ['SchoolRoofDoor_Web', _Web, 5],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Web_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Web"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 227;
export const Y = 0;
export const Height = 271;
export const Interactive= true
export const Width = 327;
export const Alpha = 1;
export let Scale = 1;

 
