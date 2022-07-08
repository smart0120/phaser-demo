
        import _Bird4Roof from './images/Bird4Roof.png'
let paths = [
        ['SchoolForestGlade_Bird4Roof', _Bird4Roof, 58],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bird4Roof_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bird4Roof"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 624;
export const Y = 356;
export const Height = 38;
export const Interactive= true
export const Width = 54;
export const Alpha = 1;
export let Scale = 1;

 
