
        import _Toilet from './images/Toilet.png'
let paths = [
        ['HomeBathroom_Toilet', _Toilet, 10],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Toilet_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Toilet"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 627;
export const Y = 321;
export const Height = 349;
export const Interactive= true
export const Width = 596;
export const Alpha = 1;
export let Scale = 1;

 
