
        import _Candy3 from './images/Candy3.png'
let paths = [
        ['SchoolForestGlade_Candy3', _Candy3, 48],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Candy3_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Candy3"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 876;
export const Y = 867;
export const Height = 22;
export const Interactive= true
export const Width = 39;
export const Alpha = 1;
export let Scale = 1;

 
