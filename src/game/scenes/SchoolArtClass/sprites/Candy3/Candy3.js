
        import _Candy3 from './images/Candy3.png'
let paths = [
        ['SchoolArtClass_Candy3', _Candy3, 51],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Candy3_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Candy3"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1252;
export const Y = 806;
export const Height = 25;
export const Interactive= true
export const Width = 41;
export const Alpha = 1;
export let Scale = 1;

 
