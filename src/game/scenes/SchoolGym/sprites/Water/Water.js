
        import _Water from './images/Water.png'
let paths = [
        ['SchoolGym_Water', _Water, 52],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Water_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Water"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 455;
export const Y = 707;
export const Height = 50;
export const Interactive= true
export const Width = 300;
export const Alpha = 1;
export let Scale = 1;

 
