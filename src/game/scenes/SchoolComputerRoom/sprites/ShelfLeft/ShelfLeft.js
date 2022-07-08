
        import _ShelfLeft from './images/ShelfLeft.png'
let paths = [
        ['SchoolComputerRoom_ShelfLeft', _ShelfLeft, 17],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./ShelfLeft_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "ShelfLeft"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 622;
export const Height = 440;
export const Interactive= true
export const Width = 232;
export const Alpha = 1;
export let Scale = 1;

 
