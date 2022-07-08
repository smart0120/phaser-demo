
        import _Ants from './images/Ants.png'
let paths = [
        ['SchoolForestGlade_Ants', _Ants, 60],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Ants_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Ants"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 999;
export const Y = 662;
export const Height = 60;
export const Interactive= true
export const Width = 42;
export const Alpha = 1;
export let Scale = 1;

 
