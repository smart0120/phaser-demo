
        import _Pileofshoes4 from './images/Pileofshoes4.png'
let paths = [
        ['School1EastCorridor_Pileofshoes4', _Pileofshoes4, 30],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Pileofshoes4_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Pileofshoes4"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1511;
export const Y = 504;
export const Height = 35;
export const Interactive= true
export const Width = 69;
export const Alpha = 1;
export let Scale = 1;

 
