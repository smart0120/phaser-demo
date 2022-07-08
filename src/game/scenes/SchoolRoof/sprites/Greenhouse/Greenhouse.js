
        import _Greenhouse from './images/Greenhouse.png'
let paths = [
        ['SchoolRoof_Greenhouse', _Greenhouse, 8],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Greenhouse_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Greenhouse"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1508;
export const Y = 453;
export const Height = 545;
export const Interactive= true
export const Width = 412;
export const Alpha = 1;
export let Scale = 1;

 
