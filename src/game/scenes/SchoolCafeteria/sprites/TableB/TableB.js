
        import _TableB from './images/TableB.png'
let paths = [
        ['SchoolCafeteria_TableB', _TableB, 36],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./TableB_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "TableB"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1079;
export const Y = 608;
export const Height = 316;
export const Interactive= true
export const Width = 300;
export const Alpha = 1;
export let Scale = 1;

 
