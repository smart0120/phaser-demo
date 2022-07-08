
        import _Laptop from './images/Laptop.png'
let paths = [
        ['SchoolNurseRoom_Laptop', _Laptop, 40],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Laptop_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Laptop"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 621;
export const Height = 174;
export const Interactive= true
export const Width = 135;
export const Alpha = 1;
export let Scale = 1;

 
