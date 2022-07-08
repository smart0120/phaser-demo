
        import _Chair3 from './images/Chair3.png'
let paths = [
        ['SchoolArtClass_Chair3', _Chair3, 23],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Chair3_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Chair3"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 728;
export const Y = 704;
export const Height = 320;
export const Interactive= true
export const Width = 219;
export const Alpha = 1;
export let Scale = 1;

 
