
        import _TeacherTable from './images/TeacherTable.png'
let paths = [
        ['SchoolComputerRoom_TeacherTable', _TeacherTable, 13],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./TeacherTable_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "TeacherTable"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 105;
export const Y = 561;
export const Height = 224;
export const Interactive= true
export const Width = 393;
export const Alpha = 1;
export let Scale = 1;

 
