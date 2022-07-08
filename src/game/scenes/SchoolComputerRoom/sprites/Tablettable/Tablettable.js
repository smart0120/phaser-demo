
        import _Tablettable from './images/Tablettable.png'
let paths = [
        ['SchoolComputerRoom_Tablettable', _Tablettable, 27],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Tablettable_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Tablettable"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1402;
export const Y = 575;
export const Height = 231;
export const Interactive= true
export const Width = 237;
export const Alpha = 1;
export let Scale = 1;

 
