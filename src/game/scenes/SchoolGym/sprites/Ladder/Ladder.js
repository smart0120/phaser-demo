
        import _Ladder from './images/Ladder.png'
let paths = [
        ['SchoolGym_Ladder', _Ladder, 14],
      
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
export const X = 1472;
export const Y = 364;
export const Height = 310;
export const Interactive= true
export const Width = 195;
export const Alpha = 1;
export let Scale = 1;

 
