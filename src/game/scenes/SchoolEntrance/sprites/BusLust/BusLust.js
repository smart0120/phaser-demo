
        import _BusLust from './images/BusLust.png'
let paths = [
        ['SchoolEntrance_BusLust', _BusLust, 14],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./BusLust_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "BusLust"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1559;
export const Y = 703;
export const Height = 187;
export const Interactive= true
export const Width = 337;
export const Alpha = 1;
export let Scale = 1;

 
