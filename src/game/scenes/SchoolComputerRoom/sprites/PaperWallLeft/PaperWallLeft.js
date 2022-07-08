
        import _PaperWallLeft from './images/PaperWallLeft.png'
let paths = [
        ['SchoolComputerRoom_PaperWallLeft', _PaperWallLeft, 10],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./PaperWallLeft_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "PaperWallLeft"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 202;
export const Y = 349;
export const Height = 139;
export const Interactive= true
export const Width = 140;
export const Alpha = 1;
export let Scale = 1;

 
