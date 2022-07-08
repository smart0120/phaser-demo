
        import _Posterleft from './images/Posterleft.png'
let paths = [
        ['SchoolComputerRoom_Posterleft', _Posterleft, 5],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Posterleft_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Posterleft"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 147;
export const Height = 179;
export const Interactive= true
export const Width = 175;
export const Alpha = 1;
export let Scale = 1;

 
