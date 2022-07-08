
        import _Couch from './images/Couch.png'
let paths = [
        ['SchoolGroundFloor_Couch', _Couch, 30],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Couch_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Couch"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 695;
export const Y = 693;
export const Height = 297;
export const Interactive= true
export const Width = 576;
export const Alpha = 1;
export let Scale = 1;

 
