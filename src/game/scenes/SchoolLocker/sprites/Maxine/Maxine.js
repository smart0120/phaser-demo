
        import _Maxine from './images/Maxine.png'
let paths = [
        ['SchoolLocker_Maxine', _Maxine, 13],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Maxine_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Maxine"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1470;
export const Y = 330;
export const Height = 148;
export const Interactive= true
export const Width = 151;
export const Alpha = 1;
export let Scale = 1;

 
