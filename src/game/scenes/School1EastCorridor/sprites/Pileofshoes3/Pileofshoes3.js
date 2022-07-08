
        import _Pileofshoes3 from './images/Pileofshoes3.png'
let paths = [
        ['School1EastCorridor_Pileofshoes3', _Pileofshoes3, 29],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Pileofshoes3_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Pileofshoes3"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1518;
export const Y = 528;
export const Height = 36;
export const Interactive= true
export const Width = 72;
export const Alpha = 1;
export let Scale = 1;

 
