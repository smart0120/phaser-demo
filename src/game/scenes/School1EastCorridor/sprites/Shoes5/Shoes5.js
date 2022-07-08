
        import _Shoes5 from './images/Shoes5.png'
let paths = [
        ['School1EastCorridor_Shoes5', _Shoes5, 20],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Shoes5_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Shoes5"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1279;
export const Y = 570;
export const Height = 18;
export const Interactive= true
export const Width = 13;
export const Alpha = 1;
export let Scale = 1;

 
