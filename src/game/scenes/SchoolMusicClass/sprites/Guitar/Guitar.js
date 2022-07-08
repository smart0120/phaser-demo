
        import _Guitar from './images/Guitar.png'
let paths = [
        ['SchoolMusicClass_Guitar', _Guitar, 12],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Guitar_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Guitar"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1011;
export const Y = 174;
export const Height = 190;
export const Interactive= true
export const Width = 163;
export const Alpha = 1;
export let Scale = 1;

 
