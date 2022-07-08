
        import _PaperWallRight from './images/PaperWallRight.png'
let paths = [
        ['SchoolComputerRoom_PaperWallRight', _PaperWallRight, 9],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./PaperWallRight_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "PaperWallRight"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1470;
export const Y = 366;
export const Height = 91;
export const Interactive= true
export const Width = 61;
export const Alpha = 1;
export let Scale = 1;

 
