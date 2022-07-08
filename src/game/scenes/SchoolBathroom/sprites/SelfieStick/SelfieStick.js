
        import _SelfieStick from './images/SelfieStick.png'
let paths = [
        ['SchoolBathroom_SelfieStick', _SelfieStick, 6],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./SelfieStick_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "SelfieStick"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1274;
export const Y = 340;
export const Height = 447;
export const Interactive= true
export const Width = 115;
export const Alpha = 1;
export let Scale = 1;

 
