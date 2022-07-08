
        import _Wetlaundry1 from './images/Wetlaundry1.png'
let paths = [
        ['HomeBathroom_Wetlaundry1', _Wetlaundry1, 27],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Wetlaundry1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Wetlaundry1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1108;
export const Y = 80;
export const Height = 974;
export const Interactive= true
export const Width = 512;
export const Alpha = 1;
export let Scale = 1;

 
