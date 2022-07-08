
        import _Screen2On from './images/Screen2On.png'
let paths = [
        ['SchoolComputerRoom_Screen2On', _Screen2On, 43],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Screen2On_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Screen2On"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 612;
export const Y = 571;
export const Height = 98;
export const Interactive= true
export const Width = 138;
export const Alpha = 1;
export let Scale = 1;

 
