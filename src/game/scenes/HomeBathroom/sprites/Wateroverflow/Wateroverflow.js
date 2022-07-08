
        import _Wateroverflow from './images/Wateroverflow.png'
let paths = [
        ['HomeBathroom_Wateroverflow', _Wateroverflow, 17],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Wateroverflow_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Wateroverflow"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1402;
export const Y = 554;
export const Height = 526;
export const Interactive= true
export const Width = 405;
export const Alpha = 1;
export let Scale = 1;

 
