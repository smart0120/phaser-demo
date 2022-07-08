
        import _Pileofshoes7 from './images/Pileofshoes7.png'
let paths = [
        ['School1EastCorridor_Pileofshoes7', _Pileofshoes7, 33],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Pileofshoes7_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Pileofshoes7"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1502;
export const Y = 438;
export const Height = 42;
export const Interactive= true
export const Width = 75;
export const Alpha = 1;
export let Scale = 1;

 
