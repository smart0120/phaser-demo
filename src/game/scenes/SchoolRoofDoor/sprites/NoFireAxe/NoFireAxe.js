
        import _NoFireAxe from './images/NoFireAxe.png'
let paths = [
        ['SchoolRoofDoor_NoFireAxe', _NoFireAxe, 12],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./NoFireAxe_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "NoFireAxe"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1608;
export const Y = 94;
export const Height = 669;
export const Interactive= true
export const Width = 254;
export const Alpha = 1;
export let Scale = 1;

 
