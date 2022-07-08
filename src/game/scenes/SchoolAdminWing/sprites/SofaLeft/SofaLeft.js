
        import _SofaLeft from './images/SofaLeft.png'
let paths = [
        ['SchoolAdminWing_SofaLeft', _SofaLeft, 8],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./SofaLeft_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "SofaLeft"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 796;
export const Y = 398;
export const Height = 156;
export const Interactive= true
export const Width = 128;
export const Alpha = 1;
export let Scale = 1;

 
