
        import _IsabelleXray from './images/IsabelleXray.png'
let paths = [
        ['SchoolGroundFloor_IsabelleXray', _IsabelleXray, 20],
      
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
export const X = 1129;
export const Y = 529;
export const Height = 319;
export const Interactive= true
export const Width = 86;
export const Alpha = 1;
export let Scale = 1;

 
