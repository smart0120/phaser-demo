
        import _Easel1 from './images/Easel1.png'
let paths = [
        ['SchoolArtClass_Easel1', _Easel1, 12],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Easel1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Easel1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 920;
export const Y = 409;
export const Height = 663;
export const Interactive= true
export const Width = 309;
export const Alpha = 1;
export let Scale = 1;

 
