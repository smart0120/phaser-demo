
        import _PaintBuckets from './images/PaintBuckets.png'
let paths = [
        ['SchoolArtClass_PaintBuckets', _PaintBuckets, 29],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./PaintBuckets_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "PaintBuckets"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 829;
export const Y = 627;
export const Height = 85;
export const Interactive= true
export const Width = 150;
export const Alpha = 1;
export let Scale = 1;

 
