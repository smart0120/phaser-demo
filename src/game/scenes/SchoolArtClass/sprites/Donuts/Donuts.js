
        import _Donuts from './images/Donuts.png'
let paths = [
        ['SchoolArtClass_Donuts', _Donuts, 18],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Donuts_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Donuts"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 929;
export const Y = 485;
export const Height = 79;
export const Interactive= true
export const Width = 35;
export const Alpha = 1;
export let Scale = 1;

 
