
        import _Dollar from './images/Dollar.png'
let paths = [
        ['SchoolGroundFloor_Dollar', _Dollar, 45],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Dollar_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Dollar"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1076;
export const Y = 975;
export const Height = 46;
export const Interactive= true
export const Width = 39;
export const Alpha = 1;
export let Scale = 1;

 
