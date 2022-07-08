
        import _Shoes10 from './images/Shoes10.png'
let paths = [
        ['School1EastCorridor_Shoes10', _Shoes10, 25],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Shoes10_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Shoes10"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1538;
export const Y = 690;
export const Height = 37;
export const Interactive= true
export const Width = 30;
export const Alpha = 1;
export let Scale = 1;

 
