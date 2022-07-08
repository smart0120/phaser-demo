
        import _Pileofshoes9 from './images/Pileofshoes9.png'
let paths = [
        ['School1EastCorridor_Pileofshoes9', _Pileofshoes9, 35],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Pileofshoes9_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Pileofshoes9"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1511;
export const Y = 394;
export const Height = 42;
export const Interactive= true
export const Width = 78;
export const Alpha = 1;
export let Scale = 1;

 
