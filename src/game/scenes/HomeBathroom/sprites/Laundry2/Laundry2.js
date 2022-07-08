
        import _Laundry2 from './images/Laundry2.png'
let paths = [
        ['HomeBathroom_Laundry2', _Laundry2, 45],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Laundry2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Laundry2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1021;
export const Y = 753;
export const Height = 35;
export const Interactive= true
export const Width = 91;
export const Alpha = 1;
export let Scale = 1;

 
