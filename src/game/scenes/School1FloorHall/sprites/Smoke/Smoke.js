
        import _Smoke from './images/Smoke.png'
let paths = [
        ['School1FloorHall_Smoke', _Smoke, 8],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Smoke_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Smoke"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1758;
export const Y = 314;
export const Height = 181;
export const Interactive= true
export const Width = 161;
export const Alpha = 1;
export let Scale = 1;

 
