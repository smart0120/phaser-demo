
        import _MrslXray from './images/MrslXray.png'
let paths = [
        ['SchoolGym_MrslXray', _MrslXray, 37],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./MrslXray_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "MrslXray"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 508;
export const Y = 469;
export const Height = 144;
export const Interactive= true
export const Width = 126;
export const Alpha = 1;
export let Scale = 1;

 
