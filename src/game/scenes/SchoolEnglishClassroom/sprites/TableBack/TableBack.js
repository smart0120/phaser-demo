
        import _TableBack from './images/TableBack.png'
let paths = [
        ['SchoolEnglishClassroom_TableBack', _TableBack, 29],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./TableBack_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "TableBack"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1057;
export const Y = 775;
export const Height = 305;
export const Interactive= true
export const Width = 863;
export const Alpha = 1;
export let Scale = 1;

 
