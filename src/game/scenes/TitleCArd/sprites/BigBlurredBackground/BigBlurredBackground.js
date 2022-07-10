
        import _BigBlurredBackground from './images/BigBlurredBackground.png'
let paths = [
        ['TitleCArd_BigBlurredBackground', _BigBlurredBackground, 3],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./BigBlurredBackground_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "BigBlurredBackground"
export const Id = 22;
export const GroupId = "0,1,2,-1"
export const Visible = false
export const X = 0;
export const Y = 0;
export const Height = 1080;
export const Interactive= true
export const Width = 1920;
export const Alpha = 1;
export let Scale = 1;

 
