
        import _Rainbow from './images/Rainbow.png'
let paths = [
        ['SchoolNurseRoom_Rainbow', _Rainbow, 7],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Rainbow_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Rainbow"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1081;
export const Y = 370;
export const Height = 54;
export const Interactive= true
export const Width = 107;
export const Alpha = 1;
export let Scale = 1;

 
