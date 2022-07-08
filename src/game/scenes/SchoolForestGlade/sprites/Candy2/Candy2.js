
        import _Candy2 from './images/Candy2.png'
let paths = [
        ['SchoolForestGlade_Candy2', _Candy2, 50],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Candy2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Candy2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 593;
export const Y = 768;
export const Height = 13;
export const Interactive= true
export const Width = 19;
export const Alpha = 1;
export let Scale = 1;

 
