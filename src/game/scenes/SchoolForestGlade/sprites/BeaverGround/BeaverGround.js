
        import _BeaverGround from './images/BeaverGround.png'
let paths = [
        ['SchoolForestGlade_BeaverGround', _BeaverGround, 36],
      
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
export const X = 806;
export const Y = 870;
export const Height = 98;
export const Interactive= true
export const Width = 114;
export const Alpha = 1;
export let Scale = 1;

 
