
        import _Pileofshoes15 from './images/Pileofshoes15.png'
let paths = [
        ['School1EastCorridor_Pileofshoes15', _Pileofshoes15, 41],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Pileofshoes15_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Pileofshoes15"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1502;
export const Y = 269;
export const Height = 40;
export const Interactive= true
export const Width = 74;
export const Alpha = 1;
export let Scale = 1;

 
