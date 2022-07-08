
        import _Trash from './images/Trash.png'
let paths = [
        ['HomeBathroom_Trash', _Trash, 37],
      
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
export const X = 1213;
export const Y = 728;
export const Height = 75;
export const Interactive= true
export const Width = 100;
export const Alpha = 1;
export let Scale = 1;

 
