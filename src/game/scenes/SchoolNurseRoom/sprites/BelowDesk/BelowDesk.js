
        import _BelowDesk from './images/BelowDesk.png'
let paths = [
        ['SchoolNurseRoom_BelowDesk', _BelowDesk, 41],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./BelowDesk_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "BelowDesk"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 217;
export const Y = 812;
export const Height = 42;
export const Interactive= true
export const Width = 320;
export const Alpha = 1;
export let Scale = 1;

 
