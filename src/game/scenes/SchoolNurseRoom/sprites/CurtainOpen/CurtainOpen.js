
        import _CurtainOpen from './images/CurtainOpen.png'
let paths = [
        ['SchoolNurseRoom_CurtainOpen', _CurtainOpen, 19],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./CurtainOpen_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "CurtainOpen"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1652;
export const Y = 196;
export const Height = 623;
export const Interactive= true
export const Width = 116;
export const Alpha = 1;
export let Scale = 1;

 
