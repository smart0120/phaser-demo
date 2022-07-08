
        import _Wetlaundry3 from './images/Wetlaundry3.png'
let paths = [
        ['HomeBathroom_Wetlaundry3', _Wetlaundry3, 25],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Wetlaundry3_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Wetlaundry3"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 587;
export const Y = 194;
export const Height = 109;
export const Interactive= true
export const Width = 38;
export const Alpha = 1;
export let Scale = 1;

 
