
        import _IsabelleXray from './images/IsabelleXray.png'
let paths = [
        ['SchoolForestGlade_IsabelleXray', _IsabelleXray, 82],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./IsabelleXray_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "IsabelleXray"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 344;
export const Y = 443;
export const Height = 518;
export const Interactive= true
export const Width = 150;
export const Alpha = 1;
export let Scale = 1;

 
