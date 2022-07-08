
        import _Hole from './images/Hole.png'
let paths = [
        ['SchoolForestGlade_Hole', _Hole, 75],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Hole_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Hole"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 58;
export const Y = 870;
export const Height = 173;
export const Interactive= true
export const Width = 362;
export const Alpha = 1;
export let Scale = 1;

 
