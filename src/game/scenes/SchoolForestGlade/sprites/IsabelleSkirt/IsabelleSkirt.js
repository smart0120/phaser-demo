
        import _IsabelleSkirt from './images/IsabelleSkirt.png'
let paths = [
        ['SchoolForestGlade_IsabelleSkirt', _IsabelleSkirt, 84],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./IsabelleSkirt_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "IsabelleSkirt"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 344;
export const Y = 443;
export const Height = 519;
export const Interactive= true
export const Width = 150;
export const Alpha = 1;
export let Scale = 1;

 
