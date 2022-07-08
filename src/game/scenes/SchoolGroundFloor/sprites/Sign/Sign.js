
        import _Sign from './images/Sign.png'
let paths = [
        ['SchoolGroundFloor_Sign', _Sign, 38],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Sign_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Sign"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 512;
export const Y = 680;
export const Height = 133;
export const Interactive= true
export const Width = 110;
export const Alpha = 1;
export let Scale = 1;

 
