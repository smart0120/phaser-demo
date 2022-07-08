
        import _Shorts from './images/Shorts.png'
let paths = [
        ['SchoolGym_Shorts', _Shorts, 29],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Shorts_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Shorts"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1593;
export const Y = 814;
export const Height = 100;
export const Interactive= true
export const Width = 169;
export const Alpha = 1;
export let Scale = 1;

 
