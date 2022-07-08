
        import _Candy9 from './images/Candy9.png'
let paths = [
        ['School1WestCorridor_Candy9', _Candy9, 37],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Candy9_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Candy9"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1043;
export const Y = 889;
export const Height = 31;
export const Interactive= true
export const Width = 40;
export const Alpha = 1;
export let Scale = 1;

 
