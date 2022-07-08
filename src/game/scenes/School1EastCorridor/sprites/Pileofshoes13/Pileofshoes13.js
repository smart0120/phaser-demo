
        import _Pileofshoes13 from './images/Pileofshoes13.png'
let paths = [
        ['School1EastCorridor_Pileofshoes13', _Pileofshoes13, 39],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Pileofshoes13_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Pileofshoes13"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1507;
export const Y = 312;
export const Height = 35;
export const Interactive= true
export const Width = 71;
export const Alpha = 1;
export let Scale = 1;

 
