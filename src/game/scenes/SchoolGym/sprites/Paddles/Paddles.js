
        import _Paddles from './images/Paddles.png'
let paths = [
        ['SchoolGym_Paddles', _Paddles, 30],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Paddles_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Paddles"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1725;
export const Y = 813;
export const Height = 106;
export const Interactive= true
export const Width = 183;
export const Alpha = 1;
export let Scale = 1;

 
