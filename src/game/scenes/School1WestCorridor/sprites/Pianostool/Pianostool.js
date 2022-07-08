
        import _Pianostool from './images/Pianostool.png'
let paths = [
        ['School1WestCorridor_Pianostool', _Pianostool, 29],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Pianostool_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Pianostool"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1450;
export const Y = 804;
export const Height = 265;
export const Interactive= true
export const Width = 205;
export const Alpha = 1;
export let Scale = 1;

 
