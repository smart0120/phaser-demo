
        import _Screen1onNight from './images/Screen1onNight.png'
let paths = [
        ['SchoolComputerRoom_Screen1onNight', _Screen1onNight, 49],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Screen1onNight_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Screen1onNight"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 294;
export const Y = 494;
export const Height = 265;
export const Interactive= true
export const Width = 333;
export const Alpha = 1;
export let Scale = 1;

 
