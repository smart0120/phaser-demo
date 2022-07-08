
        import _LindseystairsXrayFull from './images/LindseystairsXrayFull.png'
let paths = [
        ['SchoolGroundFloor_LindseystairsXrayFull', _LindseystairsXrayFull, 46],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./LindseystairsXrayFull_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "LindseystairsXrayFull"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 959;
export const Y = 407;
export const Height = 82;
export const Interactive= true
export const Width = 30;
export const Alpha = 1;
export let Scale = 1;

 
