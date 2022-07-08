
        import _Pileofshoes8 from './images/Pileofshoes8.png'
let paths = [
        ['School1EastCorridor_Pileofshoes8', _Pileofshoes8, 34],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Pileofshoes8_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Pileofshoes8"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1513;
export const Y = 428;
export const Height = 31;
export const Interactive= true
export const Width = 75;
export const Alpha = 1;
export let Scale = 1;

 
