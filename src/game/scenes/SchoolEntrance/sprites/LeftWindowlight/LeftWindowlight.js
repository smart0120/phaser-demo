
        import _LeftWindowlight from './images/LeftWindowlight.png'
let paths = [
        ['SchoolEntrance_LeftWindowlight', _LeftWindowlight, 49],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./LeftWindowlight_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "LeftWindowlight"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 538;
export const Y = 663;
export const Height = 67;
export const Interactive= true
export const Width = 40;
export const Alpha = 1;
export let Scale = 1;

 
