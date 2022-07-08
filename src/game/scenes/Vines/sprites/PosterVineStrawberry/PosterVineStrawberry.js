
        import _PosterVineStrawberry from './images/PosterVineStrawberry.png'
let paths = [
        ['Vines_PosterVineStrawberry', _PosterVineStrawberry, 90],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./PosterVineStrawberry_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "PosterVineStrawberry"
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

 
