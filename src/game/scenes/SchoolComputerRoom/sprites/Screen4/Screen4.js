
        import _Screen4 from './images/Screen4.png'
let paths = [
        ['SchoolComputerRoom_Screen4', _Screen4, 34],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Screen4_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Screen4"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 966;
export const Y = 547;
export const Height = 142;
export const Interactive= true
export const Width = 126;
export const Alpha = 1;
export let Scale = 1;

 
