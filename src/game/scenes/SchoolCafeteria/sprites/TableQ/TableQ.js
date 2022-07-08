
        import _TableQ from './images/TableQ.png'
let paths = [
        ['SchoolCafeteria_TableQ', _TableQ, 22],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./TableQ_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "TableQ"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 663;
export const Y = 533;
export const Height = 216;
export const Interactive= true
export const Width = 205;
export const Alpha = 1;
export let Scale = 1;

 
