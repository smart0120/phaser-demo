
        import _Donuts from './images/Donuts.png'
let paths = [
        ['SchoolCafeteria_Donuts', _Donuts, 14],
      
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
export const X = 433;
export const Y = 364;
export const Height = 135;
export const Interactive= true
export const Width = 61;
export const Alpha = 1;
export let Scale = 1;

 
