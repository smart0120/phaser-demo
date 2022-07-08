
        import _Lamptop from './images/Lamptop.png'
let paths = [
        ['SchoolComputerRoom_Lamptop', _Lamptop, 2],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Lamptop_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Lamptop"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 134;
export const Y = 0;
export const Height = 197;
export const Interactive= true
export const Width = 1533;
export const Alpha = 1;
export let Scale = 1;

 
