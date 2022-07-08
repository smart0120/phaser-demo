
        import _Pileofshoes16 from './images/Pileofshoes16.png'
let paths = [
        ['School1EastCorridor_Pileofshoes16', _Pileofshoes16, 42],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Pileofshoes16_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Pileofshoes16"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1513;
export const Y = 253;
export const Height = 34;
export const Interactive= true
export const Width = 75;
export const Alpha = 1;
export let Scale = 1;

 
