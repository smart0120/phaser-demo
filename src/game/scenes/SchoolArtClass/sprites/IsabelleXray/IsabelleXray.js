
        import _IsabelleXray from './images/IsabelleXray.png'
let paths = [
        ['SchoolArtClass_IsabelleXray', _IsabelleXray, 38],
      
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
export const X = 172;
export const Y = 339;
export const Height = 446;
export const Interactive= true
export const Width = 171;
export const Alpha = 1;
export let Scale = 1;

 
