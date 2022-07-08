
        import _Mirror from './images/Mirror.png'
let paths = [
        ['SchoolClubroom_Mirror', _Mirror, 26],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Mirror_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Mirror"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 835;
export const Y = 485;
export const Height = 44;
export const Interactive= true
export const Width = 51;
export const Alpha = 1;
export let Scale = 1;

 
