
        import _TiedVineMilk from './images/TiedVineMilk.png'
let paths = [
        ['Vines_TiedVineMilk', _TiedVineMilk, 4],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./TiedVineMilk_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "TiedVineMilk"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1106;
export const Y = 659;
export const Height = 135;
export const Interactive= true
export const Width = 299;
export const Alpha = 1;
export let Scale = 1;

 
