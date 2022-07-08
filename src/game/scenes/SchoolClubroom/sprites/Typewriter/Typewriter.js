
        import _Typewriter from './images/Typewriter.png'
let paths = [
        ['SchoolClubroom_Typewriter', _Typewriter, 16],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Typewriter_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Typewriter"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 681;
export const Y = 592;
export const Height = 149;
export const Interactive= true
export const Width = 233;
export const Alpha = 1;
export let Scale = 1;

 
