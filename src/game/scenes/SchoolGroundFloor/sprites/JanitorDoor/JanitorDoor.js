
        import _JanitorDoor from './images/JanitorDoor.png'
let paths = [
        ['SchoolGroundFloor_JanitorDoor', _JanitorDoor, 14],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./JanitorDoor_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "JanitorDoor"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1562;
export const Y = 547;
export const Height = 156;
export const Interactive= true
export const Width = 28;
export const Alpha = 1;
export let Scale = 1;

 
