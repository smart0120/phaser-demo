
        import _NurseXray from './images/NurseXray.png'
let paths = [
        ['SchoolForestGlade_NurseXray', _NurseXray, 73],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./NurseXray_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "NurseXray"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1521;
export const Y = 719;
export const Height = 361;
export const Interactive= true
export const Width = 206;
export const Alpha = 1;
export let Scale = 1;

 
