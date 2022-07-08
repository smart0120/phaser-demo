
        import _Magnet from './images/Magnet.png'
let paths = [
        ['School1WestCorridor_Magnet', _Magnet, 50],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Magnet_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Magnet"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 570;
export const Y = 798;
export const Height = 47;
export const Interactive= true
export const Width = 101;
export const Alpha = 1;
export let Scale = 1;

 
