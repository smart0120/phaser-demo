
        import _BackboardBottom from './images/BackboardBottom.png'
let paths = [
        ['SchoolGym_BackboardBottom', _BackboardBottom, 15],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./BackboardBottom_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "BackboardBottom"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1739;
export const Y = 75;
export const Height = 334;
export const Interactive= true
export const Width = 171;
export const Alpha = 1;
export let Scale = 1;

 
