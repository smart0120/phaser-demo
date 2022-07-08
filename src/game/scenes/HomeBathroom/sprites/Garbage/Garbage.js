
        import _Garbage from './images/Garbage.png'
let paths = [
        ['HomeBathroom_Garbage', _Garbage, 21],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Garbage_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Garbage"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1374;
export const Y = 679;
export const Height = 117;
export const Interactive= true
export const Width = 107;
export const Alpha = 1;
export let Scale = 1;

 
