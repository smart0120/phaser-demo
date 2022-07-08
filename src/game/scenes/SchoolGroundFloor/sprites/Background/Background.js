
        import _Background from './images/Background.png'
let paths = [
        ['SchoolGroundFloor_Background', _Background, 1],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Background_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Background"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = -12;
export const Y = -119;
export const Height = 1328;
export const Interactive= true
export const Width = 1953;
export const Alpha = 1;
export let Scale = 1;

 
