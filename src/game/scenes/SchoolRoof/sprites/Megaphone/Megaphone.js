
        import _Megaphone from './images/Megaphone.png'
let paths = [
        ['SchoolRoof_Megaphone', _Megaphone, 13],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Megaphone_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Megaphone"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 278;
export const Y = 25;
export const Height = 563;
export const Interactive= true
export const Width = 146;
export const Alpha = 1;
export let Scale = 1;

 
