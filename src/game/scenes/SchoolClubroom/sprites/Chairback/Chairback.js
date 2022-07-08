
        import _Chairback from './images/Chairback.png'
let paths = [
        ['SchoolClubroom_Chairback', _Chairback, 33],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Chairback_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Chairback"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 571;
export const Y = 743;
export const Height = 237;
export const Interactive= true
export const Width = 271;
export const Alpha = 1;
export let Scale = 1;

 
