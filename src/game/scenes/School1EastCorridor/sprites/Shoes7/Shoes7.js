
        import _Shoes7 from './images/Shoes7.png'
let paths = [
        ['School1EastCorridor_Shoes7', _Shoes7, 22],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Shoes7_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Shoes7"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1443;
export const Y = 723;
export const Height = 33;
export const Interactive= true
export const Width = 24;
export const Alpha = 1;
export let Scale = 1;

 
