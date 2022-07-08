
        import _IsabelleXray from './images/IsabelleXray.png'
let paths = [
        ['SchoolAdminWing_IsabelleXray', _IsabelleXray, 41],
      
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
export const X = 1201;
export const Y = 309;
export const Height = 482;
export const Interactive= true
export const Width = 170;
export const Alpha = 1;
export let Scale = 1;

 
