
        import _Egg from './images/Egg.png'
let paths = [
        ['SchoolForestGlade_Egg', _Egg, 34],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Egg_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Egg"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 671;
export const Height = 51;
export const Interactive= true
export const Width = 85;
export const Alpha = 1;
export let Scale = 1;

 
