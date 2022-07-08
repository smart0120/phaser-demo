
        import _Trophycase from './images/Trophycase.png'
let paths = [
        ['School1EastCorridor_Trophycase', _Trophycase, 47],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Trophycase_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Trophycase"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 275;
export const Y = 122;
export const Height = 782;
export const Interactive= true
export const Width = 464;
export const Alpha = 1;
export let Scale = 1;

 
