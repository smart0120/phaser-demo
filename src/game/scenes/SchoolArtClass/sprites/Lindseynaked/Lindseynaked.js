
        import _Lindseynaked from './images/Lindseynaked.png'
let paths = [
        ['SchoolArtClass_Lindseynaked', _Lindseynaked, 57],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Lindseynaked_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Lindseynaked"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1230;
export const Y = 400;
export const Height = 643;
export const Interactive= true
export const Width = 223;
export const Alpha = 1;
export let Scale = 1;

 
