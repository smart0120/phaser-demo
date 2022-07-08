
        import _Pileofshoes11 from './images/Pileofshoes11.png'
let paths = [
        ['School1EastCorridor_Pileofshoes11', _Pileofshoes11, 37],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Pileofshoes11_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Pileofshoes11"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1516;
export const Y = 354;
export const Height = 39;
export const Interactive= true
export const Width = 72;
export const Alpha = 1;
export let Scale = 1;

 
