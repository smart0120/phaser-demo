
        import _Screen1On from './images/Screen1On.png'
let paths = [
        ['SchoolComputerRoom_Screen1On', _Screen1On, 38],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Screen1On_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Screen1On"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 377;
export const Y = 577;
export const Height = 111;
export const Interactive= true
export const Width = 249;
export const Alpha = 1;
export let Scale = 1;

 
