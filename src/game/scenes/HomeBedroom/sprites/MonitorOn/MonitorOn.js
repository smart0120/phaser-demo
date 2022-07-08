
        import _MonitorOn from './images/MonitorOn.png'
let paths = [
        ['HomeBedroom_MonitorOn', _MonitorOn, 34],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./MonitorOn_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "MonitorOn"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1158;
export const Y = 502;
export const Height = 79;
export const Interactive= true
export const Width = 152;
export const Alpha = 1;
export let Scale = 1;

 
