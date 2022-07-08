
        import _BackboardTop from './images/BackboardTop.png'
let paths = [
        ['SchoolGym_BackboardTop', _BackboardTop, 16],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./BackboardTop_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "BackboardTop"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1617;
export const Y = 0;
export const Height = 99;
export const Interactive= true
export const Width = 292;
export const Alpha = 1;
export let Scale = 1;

 
