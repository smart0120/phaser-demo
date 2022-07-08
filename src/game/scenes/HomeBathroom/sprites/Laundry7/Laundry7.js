
        import _Laundry7 from './images/Laundry7.png'
let paths = [
        ['HomeBathroom_Laundry7', _Laundry7, 40],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Laundry7_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Laundry7"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 725;
export const Y = 107;
export const Height = 49;
export const Interactive= true
export const Width = 48;
export const Alpha = 1;
export let Scale = 1;

 
