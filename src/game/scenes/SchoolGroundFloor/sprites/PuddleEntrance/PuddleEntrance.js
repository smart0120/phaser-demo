
        import _PuddleEntrance from './images/PuddleEntrance.png'
let paths = [
        ['SchoolGroundFloor_PuddleEntrance', _PuddleEntrance, 2],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./PuddleEntrance_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "PuddleEntrance"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 138;
export const Y = 741;
export const Height = 129;
export const Interactive= true
export const Width = 472;
export const Alpha = 1;
export let Scale = 1;

 
