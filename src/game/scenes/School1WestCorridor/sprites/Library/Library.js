
        import _Library from './images/Library.png'
let paths = [
        ['School1WestCorridor_Library', _Library, 2],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Library_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Library"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 845;
export const Y = 288;
export const Height = 244;
export const Interactive= true
export const Width = 225;
export const Alpha = 1;
export let Scale = 1;

 
