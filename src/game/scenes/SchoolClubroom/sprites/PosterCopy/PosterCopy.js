
        import _PosterCopy from './images/PosterCopy.png'
let paths = [
        ['SchoolClubroom_PosterCopy', _PosterCopy, 36],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./PosterCopy_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "PosterCopy"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 65;
export const Y = 391;
export const Height = 108;
export const Interactive= true
export const Width = 101;
export const Alpha = 1;
export let Scale = 1;

 
