
        import _Teddy from './images/Teddy.png'
let paths = [
        ['SchoolNurseRoom_Teddy', _Teddy, 37],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Teddy_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Teddy"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 184;
export const Y = 589;
export const Height = 151;
export const Interactive= true
export const Width = 140;
export const Alpha = 1;
export let Scale = 1;

 
