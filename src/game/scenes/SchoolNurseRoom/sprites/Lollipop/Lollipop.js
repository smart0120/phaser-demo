
        import _Lollipop from './images/Lollipop.png'
let paths = [
        ['SchoolNurseRoom_Lollipop', _Lollipop, 36],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Lollipop_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Lollipop"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 475;
export const Y = 556;
export const Height = 86;
export const Interactive= true
export const Width = 85;
export const Alpha = 1;
export let Scale = 1;

 
