
        import _TrailDown from './images/TrailDown.png'
let paths = [
        ['HomeHall_TrailDown', _TrailDown, 3],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./TrailDown_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "TrailDown"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 379;
export const Y = 552;
export const Height = 454;
export const Interactive= true
export const Width = 658;
export const Alpha = 1;
export let Scale = 1;

 
