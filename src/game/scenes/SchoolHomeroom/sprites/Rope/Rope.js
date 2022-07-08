
        import _Rope from './images/Rope.png'
let paths = [
        ['SchoolHomeroom_Rope', _Rope, 4],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Rope_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Rope"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 221;
export const Y = 227;
export const Height = 354;
export const Interactive= true
export const Width = 24;
export const Alpha = 1;
export let Scale = 1;

 
