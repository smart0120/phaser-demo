
        import _KateCheerleader from './images/KateCheerleader.png'
let paths = [
        ['SchoolGym_KateCheerleader', _KateCheerleader, 35],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./KateCheerleader_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "KateCheerleader"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1263;
export const Y = 467;
export const Height = 613;
export const Interactive= true
export const Width = 255;
export const Alpha = 1;
export let Scale = 1;

 
