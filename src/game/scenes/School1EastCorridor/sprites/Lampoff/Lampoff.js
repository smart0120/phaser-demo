
        import _Lampoff from './images/Lampoff.png'
let paths = [
        ['School1EastCorridor_Lampoff', _Lampoff, 13],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Lampoff_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Lampoff"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 663;
export const Y = 0;
export const Height = 199;
export const Interactive= true
export const Width = 585;
export const Alpha = 1;
export let Scale = 1;

 
