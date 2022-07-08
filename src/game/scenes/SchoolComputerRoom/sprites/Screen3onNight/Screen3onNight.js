
        import _Screen3onNight from './images/Screen3onNight.png'
let paths = [
        ['SchoolComputerRoom_Screen3onNight', _Screen3onNight, 51],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Screen3onNight_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Screen3onNight"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 708;
export const Y = 458;
export const Height = 287;
export const Interactive= true
export const Width = 322;
export const Alpha = 1;
export let Scale = 1;

 
