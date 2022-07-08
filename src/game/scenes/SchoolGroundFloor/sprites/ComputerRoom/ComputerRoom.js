
        import _ComputerRoom from './images/ComputerRoom.png'
let paths = [
        ['SchoolGroundFloor_ComputerRoom', _ComputerRoom, 3],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./ComputerRoom_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "ComputerRoom"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 232;
export const Y = 273;
export const Height = 118;
export const Interactive= true
export const Width = 32;
export const Alpha = 1;
export let Scale = 1;

 
