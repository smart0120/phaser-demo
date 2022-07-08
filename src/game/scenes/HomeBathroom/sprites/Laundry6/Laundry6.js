
        import _Laundry6 from './images/Laundry6.png'
let paths = [
        ['HomeBathroom_Laundry6', _Laundry6, 41],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Laundry6_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Laundry6"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 984;
export const Y = 440;
export const Height = 45;
export const Interactive= true
export const Width = 67;
export const Alpha = 1;
export let Scale = 1;

 
