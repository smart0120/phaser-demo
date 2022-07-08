
        import _CurtainClosed from './images/CurtainClosed.png'
let paths = [
        ['SchoolNurseRoom_CurtainClosed', _CurtainClosed, 20],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./CurtainClosed_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "CurtainClosed"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = false
export const X = 1030;
export const Y = 195;
export const Height = 626;
export const Interactive= true
export const Width = 738;
export const Alpha = 1;
export let Scale = 1;

 
