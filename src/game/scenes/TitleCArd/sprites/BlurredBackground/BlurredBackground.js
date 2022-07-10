
        import _BlurredBackground from './images/BlurredBackground.png'
let paths = [
        ['TitleCArd_BlurredBackground', _BlurredBackground, 2],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./BlurredBackground_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "BlurredBackground"
export const Id = 22;
export const GroupId = "0,1,2,-1"
export const Visible = true
export const X = 0;
export const Y = 0;
export const Height = 1080;
export const Interactive= true
export const Width = 1920;
export const Alpha = 0.45882353;
export let Scale = 1;

 
