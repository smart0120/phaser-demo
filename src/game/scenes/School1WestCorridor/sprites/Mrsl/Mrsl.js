
        import _Mrsl from './images/Mrsl.png'
let paths = [
        ['School1WestCorridor_Mrsl', _Mrsl, 33],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Mrsl_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Mrsl"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 686;
export const Y = 290;
export const Height = 556;
export const Interactive= true
export const Width = 145;
export const Alpha = 1;
export let Scale = 1;

 
