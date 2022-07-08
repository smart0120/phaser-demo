
        import _Screen4On from './images/Screen4On.png'
let paths = [
        ['SchoolComputerRoom_Screen4On', _Screen4On, 45],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Screen4On_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Screen4On"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 981;
export const Y = 556;
export const Height = 83;
export const Interactive= true
export const Width = 102;
export const Alpha = 1;
export let Scale = 1;

 
