
        import _TableA from './images/TableA.png'
let paths = [
        ['SchoolCafeteria_TableA', _TableA, 43],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./TableA_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "TableA"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1153;
export const Y = 739;
export const Height = 341;
export const Interactive= true
export const Width = 427;
export const Alpha = 1;
export let Scale = 1;

 
