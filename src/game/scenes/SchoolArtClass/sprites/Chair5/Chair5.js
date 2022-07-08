
        import _Chair5 from './images/Chair5.png'
let paths = [
        ['SchoolArtClass_Chair5', _Chair5, 21],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Chair5_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Chair5"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1537;
export const Y = 563;
export const Height = 271;
export const Interactive= true
export const Width = 166;
export const Alpha = 1;
export let Scale = 1;

 
