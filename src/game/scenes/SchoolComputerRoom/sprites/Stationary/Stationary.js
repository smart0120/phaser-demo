
        import _Stationary from './images/Stationary.png'
let paths = [
        ['SchoolComputerRoom_Stationary', _Stationary, 26],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Stationary_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Stationary"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 618;
export const Height = 97;
export const Interactive= true
export const Width = 58;
export const Alpha = 1;
export let Scale = 1;

 
