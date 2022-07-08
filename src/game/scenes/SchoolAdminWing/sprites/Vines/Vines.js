
        import _Vines from './images/Vines.png'
let paths = [
        ['SchoolAdminWing_Vines', _Vines, 21],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Vines_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Vines"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 12;
export const Y = 40;
export const Height = 996;
export const Interactive= true
export const Width = 1550;
export const Alpha = 1;
export let Scale = 1;

 
