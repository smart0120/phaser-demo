
        import _Stop from './images/Stop.png'
let paths = [
        ['HomeHall_Stop', _Stop, 11],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Stop_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Stop"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1650;
export const Y = 320;
export const Height = 178;
export const Interactive= true
export const Width = 91;
export const Alpha = 1;
export let Scale = 1;

 
