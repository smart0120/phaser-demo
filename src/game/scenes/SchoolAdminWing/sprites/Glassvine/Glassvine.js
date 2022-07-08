
        import _Glassvine from './images/Glassvine.png'
let paths = [
        ['SchoolAdminWing_Glassvine', _Glassvine, 22],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Glassvine_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Glassvine"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1269;
export const Y = 431;
export const Height = 167;
export const Interactive= true
export const Width = 136;
export const Alpha = 1;
export let Scale = 1;

 
