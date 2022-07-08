
        import _Shoes11 from './images/Shoes11.png'
let paths = [
        ['School1EastCorridor_Shoes11', _Shoes11, 26],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Shoes11_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Shoes11"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1541;
export const Y = 643;
export const Height = 35;
export const Interactive= true
export const Width = 26;
export const Alpha = 1;
export let Scale = 1;

 
