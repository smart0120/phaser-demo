
        import _Shoes4 from './images/Shoes4.png'
let paths = [
        ['School1EastCorridor_Shoes4', _Shoes4, 19],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Shoes4_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Shoes4"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1278;
export const Y = 542;
export const Height = 19;
export const Interactive= true
export const Width = 14;
export const Alpha = 1;
export let Scale = 1;

 
