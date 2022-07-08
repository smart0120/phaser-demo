
        import _PosterVineMilk from './images/PosterVineMilk.png'
let paths = [
        ['Vines_PosterVineMilk', _PosterVineMilk, 93],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./PosterVineMilk_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "PosterVineMilk"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 478;
export const Y = 324;
export const Height = 170;
export const Interactive= true
export const Width = 168;
export const Alpha = 1;
export let Scale = 1;

 
