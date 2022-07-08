
        import _Brokenlight from './images/Brokenlight.png'
let paths = [
        ['SchoolGym_Brokenlight', _Brokenlight, 46],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Brokenlight_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Brokenlight"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 843;
export const Y = 55;
export const Height = 115;
export const Interactive= true
export const Width = 37;
export const Alpha = 1;
export let Scale = 1;

 
