
        import _Carpet from './images/Carpet.png'
let paths = [
        ['HomeBathroom_Carpet', _Carpet, 7],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Carpet_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Carpet"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 428;
export const Y = 797;
export const Height = 283;
export const Interactive= true
export const Width = 874;
export const Alpha = 1;
export let Scale = 1;

 
