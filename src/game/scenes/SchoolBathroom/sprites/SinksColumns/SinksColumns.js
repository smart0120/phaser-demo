
        import _SinksColumns from './images/SinksColumns.png'
let paths = [
        ['SchoolBathroom_SinksColumns', _SinksColumns, 25],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./SinksColumns_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "SinksColumns"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 742;
export const Y = 7;
export const Height = 920;
export const Interactive= true
export const Width = 283;
export const Alpha = 1;
export let Scale = 1;

 
