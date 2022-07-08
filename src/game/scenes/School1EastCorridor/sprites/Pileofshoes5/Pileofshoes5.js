
        import _Pileofshoes5 from './images/Pileofshoes5.png'
let paths = [
        ['School1EastCorridor_Pileofshoes5', _Pileofshoes5, 31],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Pileofshoes5_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Pileofshoes5"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1506;
export const Y = 484;
export const Height = 38;
export const Interactive= true
export const Width = 71;
export const Alpha = 1;
export let Scale = 1;

 
