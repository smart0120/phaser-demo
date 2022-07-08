
        import _MrslXray from './images/MrslXray.png'
let paths = [
        ['School1EastCorridor_MrslXray', _MrslXray, 54],
      
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
export const X = 814;
export const Y = 348;
export const Height = 360;
export const Interactive= true
export const Width = 115;
export const Alpha = 1;
export let Scale = 1;

 
