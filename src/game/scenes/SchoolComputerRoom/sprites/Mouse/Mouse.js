
        import _Mouse from './images/Mouse.png'
let paths = [
        ['SchoolComputerRoom_Mouse', _Mouse, 18],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Mouse_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Mouse"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 16;
export const Y = 797;
export const Height = 57;
export const Interactive= true
export const Width = 44;
export const Alpha = 1;
export let Scale = 1;

 
