
        import _Ladder from './images/Ladder.png'
let paths = [
        ['SchoolRoof_Ladder', _Ladder, 6],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Ladder_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Ladder"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 735;
export const Y = 271;
export const Height = 400;
export const Interactive= true
export const Width = 80;
export const Alpha = 1;
export let Scale = 1;

 
