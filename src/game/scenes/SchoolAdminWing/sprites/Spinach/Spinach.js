
        import _Spinach from './images/Spinach.png'
let paths = [
        ['SchoolAdminWing_Spinach', _Spinach, 44],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Spinach_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Spinach"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 839;
export const Y = 489;
export const Height = 86;
export const Interactive= true
export const Width = 86;
export const Alpha = 1;
export let Scale = 1;

 
