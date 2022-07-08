
        import _Magazines from './images/Magazines.png'
let paths = [
        ['SchoolAdminWing_Magazines', _Magazines, 5],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Magazines_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Magazines"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 695;
export const Y = 351;
export const Height = 213;
export const Interactive= true
export const Width = 111;
export const Alpha = 1;
export let Scale = 1;

 
