
        import _WateredVineMilk from './images/WateredVineMilk.png'
let paths = [
        ['Vines_WateredVineMilk', _WateredVineMilk, 34],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./WateredVineMilk_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "WateredVineMilk"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 815;
export const Y = 657;
export const Height = 240;
export const Interactive= true
export const Width = 315;
export const Alpha = 1;
export let Scale = 1;

 
