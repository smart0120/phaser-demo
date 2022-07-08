
        import _Wetlaundry2 from './images/Wetlaundry2.png'
let paths = [
        ['HomeBathroom_Wetlaundry2', _Wetlaundry2, 26],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Wetlaundry2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Wetlaundry2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1230;
export const Y = 643;
export const Height = 28;
export const Interactive= true
export const Width = 46;
export const Alpha = 1;
export let Scale = 1;

 
