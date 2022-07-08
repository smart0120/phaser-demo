
        import _Candy7 from './images/Candy7.png'
let paths = [
        ['School1WestCorridor_Candy7', _Candy7, 39],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Candy7_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Candy7"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 906;
export const Y = 799;
export const Height = 28;
export const Interactive= true
export const Width = 46;
export const Alpha = 1;
export let Scale = 1;

 
