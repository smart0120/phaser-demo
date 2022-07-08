
        import _Pileofshoes6 from './images/Pileofshoes6.png'
let paths = [
        ['School1EastCorridor_Pileofshoes6', _Pileofshoes6, 32],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Pileofshoes6_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Pileofshoes6"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1504;
export const Y = 466;
export const Height = 35;
export const Interactive= true
export const Width = 80;
export const Alpha = 1;
export let Scale = 1;

 
