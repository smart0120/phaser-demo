
        import _SideTable from './images/SideTable.png'
let paths = [
        ['SchoolNurseRoom_SideTable', _SideTable, 5],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./SideTable_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "SideTable"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1427;
export const Y = 501;
export const Height = 192;
export const Interactive= true
export const Width = 123;
export const Alpha = 1;
export let Scale = 1;

 
