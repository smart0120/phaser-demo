
        import _Glassescase from './images/Glassescase.png'
let paths = [
        ['SchoolLocker_Glassescase', _Glassescase, 12],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Glassescase_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Glassescase"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 796;
export const Y = 238;
export const Height = 74;
export const Interactive= true
export const Width = 233;
export const Alpha = 1;
export let Scale = 1;

 
