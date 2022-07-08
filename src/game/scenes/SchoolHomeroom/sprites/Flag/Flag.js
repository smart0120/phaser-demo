
        import _Flag from './images/Flag.png'
let paths = [
        ['SchoolHomeroom_Flag', _Flag, 9],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Flag_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Flag"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1537;
export const Y = 407;
export const Height = 153;
export const Interactive= true
export const Width = 99;
export const Alpha = 1;
export let Scale = 1;

 
