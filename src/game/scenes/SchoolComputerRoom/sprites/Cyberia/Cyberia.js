
        import _Cyberia from './images/Cyberia.png'
let paths = [
        ['SchoolComputerRoom_Cyberia', _Cyberia, 53],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Cyberia_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Cyberia"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1425;
export const Y = 488;
export const Height = 134;
export const Interactive= true
export const Width = 126;
export const Alpha = 1;
export let Scale = 1;

 
