
        import _PosterVineUrine from './images/PosterVineUrine.png'
let paths = [
        ['Vines_PosterVineUrine', _PosterVineUrine, 89],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./PosterVineUrine_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "PosterVineUrine"
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

 
