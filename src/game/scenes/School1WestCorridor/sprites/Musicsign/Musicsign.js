
        import _Musicsign from './images/Musicsign.png'
let paths = [
        ['School1WestCorridor_Musicsign', _Musicsign, 5],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Musicsign_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Musicsign"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 648;
export const Y = 227;
export const Height = 70;
export const Interactive= true
export const Width = 38;
export const Alpha = 1;
export let Scale = 1;

 
