
        import _Candy6 from './images/Candy6.png'
let paths = [
        ['SchoolArtClass_Candy6', _Candy6, 48],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Candy6_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Candy6"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1670;
export const Y = 809;
export const Height = 29;
export const Interactive= true
export const Width = 45;
export const Alpha = 1;
export let Scale = 1;

 
