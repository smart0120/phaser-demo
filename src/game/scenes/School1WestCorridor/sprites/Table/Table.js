
        import _Table from './images/Table.png'
let paths = [
        ['School1WestCorridor_Table', _Table, 22],
      
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
export const X = 1330;
export const Y = 569;
export const Height = 195;
export const Interactive= true
export const Width = 158;
export const Alpha = 1;
export let Scale = 1;

 
