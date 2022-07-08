
        import _Spinach from './images/Spinach.png'
let paths = [
        ['SchoolCafeteria_Spinach', _Spinach, 68],
      
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
export const X = 1122;
export const Y = 554;
export const Height = 106;
export const Interactive= true
export const Width = 106;
export const Alpha = 1;
export let Scale = 1;

 
