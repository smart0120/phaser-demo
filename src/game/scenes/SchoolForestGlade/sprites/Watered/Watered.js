
        import _Watered from './images/Watered.png'
let paths = [
        ['SchoolForestGlade_Watered', _Watered, 15],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Watered_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Watered"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 797;
export const Y = 422;
export const Height = 293;
export const Interactive= true
export const Width = 409;
export const Alpha = 1;
export let Scale = 1;

 
