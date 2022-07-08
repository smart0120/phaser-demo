
        import _WalkRight from './images/WalkRight.png'
let paths = [
        ['School1FloorHall_WalkRight', _WalkRight, 4],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./WalkRight_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "WalkRight"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1534;
export const Y = 648;
export const Height = 240;
export const Interactive= true
export const Width = 386;
export const Alpha = 1;
export let Scale = 1;

 
