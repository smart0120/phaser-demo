
        import _Screen1 from './images/Screen1.png'
let paths = [
        ['SchoolComputerRoom_Screen1', _Screen1, 37],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Screen1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Screen1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 361;
export const Y = 570;
export const Height = 171;
export const Interactive= true
export const Width = 197;
export const Alpha = 1;
export let Scale = 1;

 
