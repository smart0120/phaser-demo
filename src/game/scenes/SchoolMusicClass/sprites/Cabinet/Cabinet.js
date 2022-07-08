
        import _Cabinet from './images/Cabinet.png'
let paths = [
        ['SchoolMusicClass_Cabinet', _Cabinet, 4],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Cabinet_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Cabinet"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 258;
export const Y = 141;
export const Height = 630;
export const Interactive= true
export const Width = 387;
export const Alpha = 1;
export let Scale = 1;

 
