
        import _Arsign from './images/Arsign.png'
let paths = [
        ['School1WestCorridor_Arsign', _Arsign, 10],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Arsign_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Arsign"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 12;
export const Height = 198;
export const Interactive= true
export const Width = 171;
export const Alpha = 1;
export let Scale = 1;

 
