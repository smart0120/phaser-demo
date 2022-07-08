
        import _Pileofshoes12 from './images/Pileofshoes12.png'
let paths = [
        ['School1EastCorridor_Pileofshoes12', _Pileofshoes12, 38],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Pileofshoes12_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Pileofshoes12"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1511;
export const Y = 332;
export const Height = 35;
export const Interactive= true
export const Width = 68;
export const Alpha = 1;
export let Scale = 1;

 
