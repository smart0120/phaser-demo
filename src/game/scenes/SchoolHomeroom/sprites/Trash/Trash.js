
        import _Trash from './images/Trash.png'
let paths = [
        ['SchoolHomeroom_Trash', _Trash, 2],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Trash_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Trash"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1135;
export const Y = 669;
export const Height = 32;
export const Interactive= true
export const Width = 53;
export const Alpha = 1;
export let Scale = 1;

 
