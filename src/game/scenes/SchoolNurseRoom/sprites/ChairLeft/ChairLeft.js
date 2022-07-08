
        import _ChairLeft from './images/ChairLeft.png'
let paths = [
        ['SchoolNurseRoom_ChairLeft', _ChairLeft, 42],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./ChairLeft_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "ChairLeft"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 8;
export const Y = 779;
export const Height = 301;
export const Interactive= true
export const Width = 342;
export const Alpha = 1;
export let Scale = 1;

 
