
        import _Box from './images/Box.png'
let paths = [
        ['SchoolClubroom_Box', _Box, 11],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Box_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Box"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 624;
export const Height = 321;
export const Interactive= true
export const Width = 393;
export const Alpha = 1;
export let Scale = 1;

 
