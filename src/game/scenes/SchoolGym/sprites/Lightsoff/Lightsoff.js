
        import _Lightsoff from './images/Lightsoff.png'
let paths = [
        ['SchoolGym_Lightsoff', _Lightsoff, 47],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Lightsoff_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Lightsoff"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 158;
export const Y = 33;
export const Height = 246;
export const Interactive= true
export const Width = 1433;
export const Alpha = 0.7019608;
export let Scale = 1;

 
