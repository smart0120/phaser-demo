
        import _SofaRight from './images/SofaRight.png'
let paths = [
        ['SchoolAdminWing_SofaRight', _SofaRight, 7],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./SofaRight_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "SofaRight"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1086;
export const Y = 398;
export const Height = 156;
export const Interactive= true
export const Width = 129;
export const Alpha = 1;
export let Scale = 1;

 
