
        import _Clothesline from './images/Clothesline.png'
let paths = [
        ['HomeBathroom_Clothesline', _Clothesline, 23],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Clothesline_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Clothesline"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1033;
export const Y = 0;
export const Height = 149;
export const Interactive= true
export const Width = 526;
export const Alpha = 1;
export let Scale = 1;

 
