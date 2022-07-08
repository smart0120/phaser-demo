
        import _Englishsign from './images/Englishsign.png'
let paths = [
        ['School1WestCorridor_Englishsign', _Englishsign, 7],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Englishsign_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Englishsign"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 411;
export const Y = 136;
export const Height = 127;
export const Interactive= true
export const Width = 101;
export const Alpha = 1;
export let Scale = 1;

 
