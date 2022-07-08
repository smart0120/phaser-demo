
        import _Doorframe from './images/Doorframe.png'
let paths = [
        ['SchoolComputerRoom_Doorframe', _Doorframe, 4],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Doorframe_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Doorframe"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1619;
export const Y = 176;
export const Height = 735;
export const Interactive= true
export const Width = 277;
export const Alpha = 1;
export let Scale = 1;

 
