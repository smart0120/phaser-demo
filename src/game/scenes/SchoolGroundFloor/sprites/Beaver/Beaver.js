
        import _Beaver from './images/Beaver.png'
let paths = [
        ['SchoolGroundFloor_Beaver', _Beaver, 28],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Beaver_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Beaver"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 460;
export const Y = 666;
export const Height = 36;
export const Interactive= true
export const Width = 35;
export const Alpha = 1;
export let Scale = 1;

 
