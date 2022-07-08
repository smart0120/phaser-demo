
        import _SpinachRight from './images/SpinachRight.png'
let paths = [
        ['SchoolGroundFloor_SpinachRight', _SpinachRight, 24],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./SpinachRight_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "SpinachRight"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1385;
export const Y = 713;
export const Height = 89;
export const Interactive= true
export const Width = 45;
export const Alpha = 1;
export let Scale = 1;

 
