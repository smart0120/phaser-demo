
        import _Shoes8 from './images/Shoes8.png'
let paths = [
        ['School1EastCorridor_Shoes8', _Shoes8, 23],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Shoes8_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Shoes8"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1475;
export const Y = 657;
export const Height = 29;
export const Interactive= true
export const Width = 23;
export const Alpha = 1;
export let Scale = 1;

 
