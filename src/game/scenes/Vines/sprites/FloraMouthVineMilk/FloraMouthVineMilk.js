
        import _FloraMouthVineMilk from './images/FloraMouthVineMilk.png'
let paths = [
        ['Vines_FloraMouthVineMilk', _FloraMouthVineMilk, 144],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./FloraMouthVineMilk_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "FloraMouthVineMilk"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 849;
export const Y = 134;
export const Height = 270;
export const Interactive= true
export const Width = 307;
export const Alpha = 1;
export let Scale = 1;

 
