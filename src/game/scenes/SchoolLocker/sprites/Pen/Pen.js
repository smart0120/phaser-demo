
        import _Pen from './images/Pen.png'
let paths = [
        ['SchoolLocker_Pen', _Pen, 8],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Pen_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Pen"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 792;
export const Y = 382;
export const Height = 181;
export const Interactive= true
export const Width = 28;
export const Alpha = 1;
export let Scale = 1;

 
