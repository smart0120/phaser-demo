
        import _Sinks from './images/Sinks.png'
let paths = [
        ['SchoolBathroom_Sinks', _Sinks, 26],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Sinks_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Sinks"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 743;
export const Y = 593;
export const Height = 179;
export const Interactive= true
export const Width = 281;
export const Alpha = 1;
export let Scale = 1;

 
