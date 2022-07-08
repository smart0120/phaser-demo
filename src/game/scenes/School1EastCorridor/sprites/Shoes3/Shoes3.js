
        import _Shoes3 from './images/Shoes3.png'
let paths = [
        ['School1EastCorridor_Shoes3', _Shoes3, 18],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Shoes3_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Shoes3"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1263;
export const Y = 585;
export const Height = 22;
export const Interactive= true
export const Width = 11;
export const Alpha = 1;
export let Scale = 1;

 
