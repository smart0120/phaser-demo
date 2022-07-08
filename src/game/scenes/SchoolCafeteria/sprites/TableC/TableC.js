
        import _TableC from './images/TableC.png'
let paths = [
        ['SchoolCafeteria_TableC', _TableC, 33],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./TableC_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "TableC"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1041;
export const Y = 533;
export const Height = 217;
export const Interactive= true
export const Width = 205;
export const Alpha = 1;
export let Scale = 1;

 
