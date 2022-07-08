
        import _DesksFront from './images/DesksFront.png'
let paths = [
        ['SchoolEnglishClassroom_DesksFront', _DesksFront, 34],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./DesksFront_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "DesksFront"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 297;
export const Y = 509;
export const Height = 410;
export const Interactive= true
export const Width = 1013;
export const Alpha = 1;
export let Scale = 1;

 
