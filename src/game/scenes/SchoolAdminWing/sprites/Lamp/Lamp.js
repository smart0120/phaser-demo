
        import _Lamp from './images/Lamp.png'
let paths = [
        ['SchoolAdminWing_Lamp', _Lamp, 4],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Lamp_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Lamp"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 611;
export const Y = 0;
export const Height = 174;
export const Interactive= true
export const Width = 692;
export const Alpha = 1;
export let Scale = 1;

 
