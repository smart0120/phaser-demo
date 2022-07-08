
        import _Pileofshoes10 from './images/Pileofshoes10.png'
let paths = [
        ['School1EastCorridor_Pileofshoes10', _Pileofshoes10, 36],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Pileofshoes10_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Pileofshoes10"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1511;
export const Y = 374;
export const Height = 42;
export const Interactive= true
export const Width = 77;
export const Alpha = 1;
export let Scale = 1;

 
