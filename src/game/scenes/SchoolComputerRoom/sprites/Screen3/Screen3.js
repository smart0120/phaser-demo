
        import _Screen3 from './images/Screen3.png'
let paths = [
        ['SchoolComputerRoom_Screen3', _Screen3, 35],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Screen3_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Screen3"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 794;
export const Y = 554;
export const Height = 148;
export const Interactive= true
export const Width = 145;
export const Alpha = 1;
export let Scale = 1;

 
