
        import _ForestVines from './images/ForestVines.png'
let paths = [
        ['SchoolForestGlade_ForestVines', _ForestVines, 91],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./ForestVines_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "ForestVines"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1243;
export const Y = 422;
export const Height = 343;
export const Interactive= true
export const Width = 186;
export const Alpha = 1;
export let Scale = 1;

 
