
        import _Candy1 from './images/Candy1.png'
let paths = [
        ['School1WestCorridor_Candy1', _Candy1, 45],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Candy1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Candy1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 141;
export const Y = 950;
export const Height = 27;
export const Interactive= true
export const Width = 45;
export const Alpha = 1;
export let Scale = 1;

 
