
        import _ChairRight from './images/ChairRight.png'
let paths = [
        ['SchoolEnglishClassroom_ChairRight', _ChairRight, 28],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./ChairRight_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "ChairRight"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1704;
export const Y = 567;
export const Height = 276;
export const Interactive= true
export const Width = 184;
export const Alpha = 1;
export let Scale = 1;

 
