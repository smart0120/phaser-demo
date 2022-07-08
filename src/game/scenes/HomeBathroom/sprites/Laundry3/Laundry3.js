
        import _Laundry3 from './images/Laundry3.png'
let paths = [
        ['HomeBathroom_Laundry3', _Laundry3, 44],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Laundry3_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Laundry3"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 826;
export const Y = 763;
export const Height = 54;
export const Interactive= true
export const Width = 154;
export const Alpha = 1;
export let Scale = 1;

 
