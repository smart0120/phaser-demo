
        import _Outside from './images/Outside.png'
let paths = [
        ['SchoolNurseRoom_Outside', _Outside, 3],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Outside_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Outside"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 77;
export const Y = 161;
export const Height = 431;
export const Interactive= true
export const Width = 241;
export const Alpha = 1;
export let Scale = 1;

 
