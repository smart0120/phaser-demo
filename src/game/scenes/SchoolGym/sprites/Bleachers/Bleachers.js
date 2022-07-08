
        import _Bleachers from './images/Bleachers.png'
let paths = [
        ['SchoolGym_Bleachers', _Bleachers, 7],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bleachers_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bleachers"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 349;
export const Height = 398;
export const Interactive= true
export const Width = 1469;
export const Alpha = 1;
export let Scale = 1;

 
