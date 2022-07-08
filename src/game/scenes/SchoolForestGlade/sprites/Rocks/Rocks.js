
        import _Rocks from './images/Rocks.png'
let paths = [
        ['SchoolForestGlade_Rocks', _Rocks, 78],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Rocks_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Rocks"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 263;
export const Y = 958;
export const Height = 56;
export const Interactive= true
export const Width = 79;
export const Alpha = 1;
export let Scale = 1;

 
