
        import _Stump from './images/Stump.png'
let paths = [
        ['SchoolForestGlade_Stump', _Stump, 29],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Stump_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Stump"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 267;
export const Y = 591;
export const Height = 113;
export const Interactive= true
export const Width = 186;
export const Alpha = 1;
export let Scale = 1;

 
