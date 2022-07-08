
        import _Candle from './images/Candle.png'
let paths = [
        ['HomeHall_Candle', _Candle, 15],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Candle_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Candle"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1519;
export const Y = 348;
export const Height = 46;
export const Interactive= true
export const Width = 24;
export const Alpha = 1;
export let Scale = 1;

 
