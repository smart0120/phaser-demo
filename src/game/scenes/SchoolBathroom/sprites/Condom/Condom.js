
        import _Condom from './images/Condom.png'
let paths = [
        ['SchoolBathroom_Condom', _Condom, 12],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Condom_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Condom"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 424;
export const Y = 1004;
export const Height = 49;
export const Interactive= true
export const Width = 133;
export const Alpha = 1;
export let Scale = 1;

 
