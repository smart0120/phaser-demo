
        import _Desk from './images/Desk.png'
let paths = [
        ['SchoolHomeroom_Desk', _Desk, 14],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Desk_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Desk"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 802;
export const Y = 561;
export const Height = 195;
export const Interactive= true
export const Width = 325;
export const Alpha = 1;
export let Scale = 1;

 
