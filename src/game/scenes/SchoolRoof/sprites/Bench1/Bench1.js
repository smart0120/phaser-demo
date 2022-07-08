
        import _Bench1 from './images/Bench1.png'
let paths = [
        ['SchoolRoof_Bench1', _Bench1, 12],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bench1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bench1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 547;
export const Y = 907;
export const Height = 173;
export const Interactive= true
export const Width = 156;
export const Alpha = 1;
export let Scale = 1;

 
