
        import _Chair1 from './images/Chair1.png'
let paths = [
        ['SchoolArtClass_Chair1', _Chair1, 25],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Chair1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Chair1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 356;
export const Y = 642;
export const Height = 288;
export const Interactive= true
export const Width = 192;
export const Alpha = 1;
export let Scale = 1;

 
