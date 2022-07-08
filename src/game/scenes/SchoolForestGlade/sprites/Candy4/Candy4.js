
        import _Candy4 from './images/Candy4.png'
let paths = [
        ['SchoolForestGlade_Candy4', _Candy4, 47],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Candy4_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Candy4"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1059;
export const Y = 811;
export const Height = 23;
export const Interactive= true
export const Width = 45;
export const Alpha = 1;
export let Scale = 1;

 
