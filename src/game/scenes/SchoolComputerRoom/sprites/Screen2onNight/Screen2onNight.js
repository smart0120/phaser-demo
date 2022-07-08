
        import _Screen2onNight from './images/Screen2onNight.png'
let paths = [
        ['SchoolComputerRoom_Screen2onNight', _Screen2onNight, 50],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Screen2onNight_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Screen2onNight"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 501;
export const Y = 483;
export const Height = 261;
export const Interactive= true
export const Width = 330;
export const Alpha = 1;
export let Scale = 1;

 
