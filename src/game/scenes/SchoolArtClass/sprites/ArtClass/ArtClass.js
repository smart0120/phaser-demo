
        import _ArtClass from './images/ArtClass.png'
let paths = [
        ['SchoolArtClass_ArtClass', _ArtClass, 1],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./ArtClass_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "ArtClass"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = -74;
export const Y = -287;
export const Height = 1367;
export const Interactive= true
export const Width = 1994;
export const Alpha = 1;
export let Scale = 1;

 
