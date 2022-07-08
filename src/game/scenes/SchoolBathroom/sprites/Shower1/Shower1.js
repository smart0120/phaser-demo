
        import _Shower1 from './images/Shower1.png'
let paths = [
        ['SchoolBathroom_Shower1', _Shower1, 3],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Shower1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Shower1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1254;
export const Y = 204;
export const Height = 543;
export const Interactive= true
export const Width = 98;
export const Alpha = 1;
export let Scale = 1;

 
