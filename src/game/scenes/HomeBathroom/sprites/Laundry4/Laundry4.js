
        import _Laundry4 from './images/Laundry4.png'
let paths = [
        ['HomeBathroom_Laundry4', _Laundry4, 43],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Laundry4_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Laundry4"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 498;
export const Y = 767;
export const Height = 50;
export const Interactive= true
export const Width = 100;
export const Alpha = 1;
export let Scale = 1;

 
