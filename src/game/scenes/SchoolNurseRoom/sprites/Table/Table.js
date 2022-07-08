
        import _Table from './images/Table.png'
let paths = [
        ['SchoolNurseRoom_Table', _Table, 22],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Table_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Table"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 377;
export const Y = 482;
export const Height = 225;
export const Interactive= true
export const Width = 264;
export const Alpha = 1;
export let Scale = 1;

 
