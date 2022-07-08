
        import _IsabelleXray from './images/IsabelleXray.png'
let paths = [
        ['SchoolEnglishClassroom_IsabelleXray', _IsabelleXray, 38],
      
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
export const X = 120;
export const Y = 398;
export const Height = 337;
export const Interactive= true
export const Width = 175;
export const Alpha = 1;
export let Scale = 1;

 
