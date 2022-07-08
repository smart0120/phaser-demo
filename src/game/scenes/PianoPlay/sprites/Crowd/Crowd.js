
        import _Crowd from './images/Crowd.png'
let paths = [
        ['PianoPlay_Crowd', _Crowd, 2],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Crowd_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Crowd"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 707;
export const Y = 0;
export const Height = 207;
export const Interactive= true
export const Width = 1213;
export const Alpha = 0.54901963;
export let Scale = 1;

 
