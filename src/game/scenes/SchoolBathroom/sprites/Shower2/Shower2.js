
        import _Shower2 from './images/Shower2.png'
let paths = [
        ['SchoolBathroom_Shower2', _Shower2, 2],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Shower2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Shower2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1405;
export const Y = 102;
export const Height = 770;
export const Interactive= true
export const Width = 146;
export const Alpha = 1;
export let Scale = 1;

 
