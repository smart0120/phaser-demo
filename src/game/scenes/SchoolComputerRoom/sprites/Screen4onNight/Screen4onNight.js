
        import _Screen4onNight from './images/Screen4onNight.png'
let paths = [
        ['SchoolComputerRoom_Screen4onNight', _Screen4onNight, 52],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Screen4onNight_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Screen4onNight"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 921;
export const Y = 493;
export const Height = 203;
export const Interactive= true
export const Width = 232;
export const Alpha = 1;
export let Scale = 1;

 
