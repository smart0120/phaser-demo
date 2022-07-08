
        import _Projector from './images/Projector.png'
let paths = [
        ['SchoolComputerRoom_Projector', _Projector, 29],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Projector_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Projector"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 738;
export const Y = 0;
export const Height = 166;
export const Interactive= true
export const Width = 157;
export const Alpha = 1;
export let Scale = 1;

 
