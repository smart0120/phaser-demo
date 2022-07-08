
        import _MainStairs from './images/MainStairs.png'
let paths = [
        ['SchoolGroundFloor_MainStairs', _MainStairs, 4],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./MainStairs_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "MainStairs"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 741;
export const Y = 486;
export const Height = 216;
export const Interactive= true
export const Width = 429;
export const Alpha = 1;
export let Scale = 1;

 
