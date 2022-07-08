
        import _Servercable from './images/Servercable.png'
let paths = [
        ['SchoolComputerRoom_Servercable', _Servercable, 23],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Servercable_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Servercable"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1412;
export const Y = 371;
export const Height = 376;
export const Interactive= true
export const Width = 193;
export const Alpha = 1;
export let Scale = 1;

 
