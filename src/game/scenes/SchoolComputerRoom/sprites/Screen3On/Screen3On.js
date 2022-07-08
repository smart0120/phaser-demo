
        import _Screen3On from './images/Screen3On.png'
let paths = [
        ['SchoolComputerRoom_Screen3On', _Screen3On, 44],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Screen3On_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Screen3On"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 812;
export const Y = 563;
export const Height = 90;
export const Interactive= true
export const Width = 116;
export const Alpha = 1;
export let Scale = 1;

 
