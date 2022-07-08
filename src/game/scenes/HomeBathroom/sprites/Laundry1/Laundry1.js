
        import _Laundry1 from './images/Laundry1.png'
let paths = [
        ['HomeBathroom_Laundry1', _Laundry1, 46],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Laundry1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Laundry1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1048;
export const Y = 981;
export const Height = 54;
export const Interactive= true
export const Width = 99;
export const Alpha = 1;
export let Scale = 1;

 
