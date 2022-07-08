
        import _TrashCan from './images/TrashCan.png'
let paths = [
        ['SchoolClubroom_TrashCan', _TrashCan, 4],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./TrashCan_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "TrashCan"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1352;
export const Y = 622;
export const Height = 97;
export const Interactive= true
export const Width = 81;
export const Alpha = 1;
export let Scale = 1;

 
