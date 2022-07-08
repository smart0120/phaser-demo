
        import _Position3 from './images/Position3.png'
let paths = [
        ['School1WestCorridor_Position3', _Position3, 8],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Position3_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Position3"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 35;
export const Y = 520;
export const Height = 604;
export const Interactive= true
export const Width = 1047;
export const Alpha = 1;
export let Scale = 1;

 
