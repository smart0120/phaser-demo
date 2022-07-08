
        import _Pileofshoes1 from './images/Pileofshoes1.png'
let paths = [
        ['School1EastCorridor_Pileofshoes1', _Pileofshoes1, 27],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Pileofshoes1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Pileofshoes1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1512;
export const Y = 573;
export const Height = 44;
export const Interactive= true
export const Width = 81;
export const Alpha = 1;
export let Scale = 1;

 
