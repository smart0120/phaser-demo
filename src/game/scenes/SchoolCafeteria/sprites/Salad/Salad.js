
        import _Salad from './images/Salad.png'
let paths = [
        ['SchoolCafeteria_Salad', _Salad, 10],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Salad_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Salad"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1483;
export const Y = 523;
export const Height = 22;
export const Interactive= true
export const Width = 202;
export const Alpha = 1;
export let Scale = 1;

 
