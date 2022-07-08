
        import _TrailToilet from './images/TrailToilet.png'
let paths = [
        ['HomeHall_TrailToilet', _TrailToilet, 4],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./TrailToilet_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "TrailToilet"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1002;
export const Y = 552;
export const Height = 103;
export const Interactive= true
export const Width = 439;
export const Alpha = 1;
export let Scale = 1;

 
