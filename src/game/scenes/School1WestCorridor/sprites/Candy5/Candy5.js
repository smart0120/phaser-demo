
        import _Candy5 from './images/Candy5.png'
let paths = [
        ['School1WestCorridor_Candy5', _Candy5, 41],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Candy5_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Candy5"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 728;
export const Y = 898;
export const Height = 26;
export const Interactive= true
export const Width = 45;
export const Alpha = 1;
export let Scale = 1;

 
