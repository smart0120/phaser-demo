
        import _Candy11 from './images/Candy11.png'
let paths = [
        ['School1WestCorridor_Candy11', _Candy11, 35],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Candy11_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Candy11"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1132;
export const Y = 1016;
export const Height = 27;
export const Interactive= true
export const Width = 47;
export const Alpha = 1;
export let Scale = 1;

 
