
        import _Telescopeleft from './images/Telescopeleft.png'
let paths = [
        ['SchoolRoof_Telescopeleft', _Telescopeleft, 9],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Telescopeleft_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Telescopeleft"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 269;
export const Y = 642;
export const Height = 261;
export const Interactive= true
export const Width = 167;
export const Alpha = 1;
export let Scale = 1;

 
