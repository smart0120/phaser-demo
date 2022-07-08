
        import _Building from './images/Building.png'
let paths = [
        ['SchoolRoof_Building', _Building, 5],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Building_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Building"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 292;
export const Y = 230;
export const Height = 525;
export const Interactive= true
export const Width = 665;
export const Alpha = 1;
export let Scale = 1;

 
