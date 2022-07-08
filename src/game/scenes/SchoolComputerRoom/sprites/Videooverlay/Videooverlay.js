
        import _Videooverlay from './images/Videooverlay.png'
let paths = [
        ['SchoolComputerRoom_Videooverlay', _Videooverlay, 42],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Videooverlay_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Videooverlay"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 377;
export const Y = 580;
export const Height = 108;
export const Interactive= true
export const Width = 164;
export const Alpha = 1;
export let Scale = 1;

 
