
        import _Speakers from './images/Speakers.png'
let paths = [
        ['SchoolMusicClass_Speakers', _Speakers, 3],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Speakers_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Speakers"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 587;
export const Y = 188;
export const Height = 468;
export const Interactive= true
export const Width = 923;
export const Alpha = 1;
export let Scale = 1;

 
