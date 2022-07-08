
        import _Shoes6 from './images/Shoes6.png'
let paths = [
        ['School1EastCorridor_Shoes6', _Shoes6, 21],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Shoes6_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Shoes6"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1297;
export const Y = 582;
export const Height = 18;
export const Interactive= true
export const Width = 12;
export const Alpha = 1;
export let Scale = 1;

 
