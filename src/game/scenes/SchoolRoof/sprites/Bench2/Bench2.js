
        import _Bench2 from './images/Bench2.png'
let paths = [
        ['SchoolRoof_Bench2', _Bench2, 11],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bench2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bench2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 657;
export const Y = 742;
export const Height = 196;
export const Interactive= true
export const Width = 387;
export const Alpha = 1;
export let Scale = 1;

 
