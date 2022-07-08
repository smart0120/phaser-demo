
        import _FloraLeftarmVineUrine from './images/FloraLeftarmVineUrine.png'
let paths = [
        ['Vines_FloraLeftarmVineUrine', _FloraLeftarmVineUrine, 110],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./FloraLeftarmVineUrine_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "FloraLeftarmVineUrine"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 197;
export const Y = 189;
export const Height = 564;
export const Interactive= true
export const Width = 873;
export const Alpha = 1;
export let Scale = 1;

 
