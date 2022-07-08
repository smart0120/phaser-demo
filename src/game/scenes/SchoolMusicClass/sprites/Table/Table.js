
        import _Table from './images/Table.png'
let paths = [
        ['SchoolMusicClass_Table', _Table, 8],
      
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
export const X = 1310;
export const Y = 524;
export const Height = 411;
export const Interactive= true
export const Width = 427;
export const Alpha = 1;
export let Scale = 1;

 
