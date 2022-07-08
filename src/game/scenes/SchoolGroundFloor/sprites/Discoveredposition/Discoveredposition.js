
        import _Discoveredposition from './images/Discoveredposition.png'
let paths = [
        ['SchoolGroundFloor_Discoveredposition', _Discoveredposition, 29],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Discoveredposition_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Discoveredposition"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 598;
export const Y = 476;
export const Height = 258;
export const Interactive= true
export const Width = 375;
export const Alpha = 1;
export let Scale = 1;

 
