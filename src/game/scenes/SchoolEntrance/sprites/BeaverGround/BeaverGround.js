
        import _BeaverGround from './images/BeaverGround.png'
let paths = [
        ['SchoolEntrance_BeaverGround', _BeaverGround, 29],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./BeaverGround_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "BeaverGround"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 567;
export const Y = 786;
export const Height = 34;
export const Interactive= true
export const Width = 35;
export const Alpha = 1;
export let Scale = 1;

 
