
        import _Poster0 from './images/Poster0.png'
let paths = [
        ['School1EastCorridor_Poster0', _Poster0, 67],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Poster0_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Poster0"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1437;
export const Y = 320;
export const Height = 47;
export const Interactive= true
export const Width = 34;
export const Alpha = 1;
export let Scale = 1;

 
