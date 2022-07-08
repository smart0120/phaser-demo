
        import _Candy1 from './images/Candy1.png'
let paths = [
        ['SchoolArtClass_Candy1', _Candy1, 53],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Candy1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Candy1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1193;
export const Y = 638;
export const Height = 19;
export const Interactive= true
export const Width = 33;
export const Alpha = 1;
export let Scale = 1;

 
