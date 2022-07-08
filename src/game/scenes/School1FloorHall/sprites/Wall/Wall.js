
        import _Wall from './images/Wall.png'
let paths = [
        ['School1FloorHall_Wall', _Wall, 3],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Wall_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Wall"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 276;
export const Y = 162;
export const Height = 689;
export const Interactive= true
export const Width = 1361;
export const Alpha = 1;
export let Scale = 1;

 
