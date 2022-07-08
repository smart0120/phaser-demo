
        import _Bench3 from './images/Bench3.png'
let paths = [
        ['SchoolRoof_Bench3', _Bench3, 10],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bench3_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bench3"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 671;
export const Y = 798;
export const Height = 284;
export const Interactive= true
export const Width = 798;
export const Alpha = 1;
export let Scale = 1;

 
