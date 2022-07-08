
        import _TrailKitchen from './images/TrailKitchen.png'
let paths = [
        ['HomeKitchen_TrailKitchen', _TrailKitchen, 29],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./TrailKitchen_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "TrailKitchen"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 326;
export const Height = 754;
export const Interactive= true
export const Width = 381;
export const Alpha = 1;
export let Scale = 1;

 
