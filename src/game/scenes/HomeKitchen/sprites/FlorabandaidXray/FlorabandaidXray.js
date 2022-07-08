
        import _FlorabandaidXray from './images/FlorabandaidXray.png'
let paths = [
        ['HomeKitchen_FlorabandaidXray', _FlorabandaidXray, 56],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./FlorabandaidXray_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "FlorabandaidXray"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1022;
export const Y = 439;
export const Height = 542;
export const Interactive= true
export const Width = 242;
export const Alpha = 1;
export let Scale = 1;

 
