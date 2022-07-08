
        import _NoGlobe from './images/NoGlobe.png'
let paths = [
        ['SchoolHomeroom_NoGlobe', _NoGlobe, 16],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./NoGlobe_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "NoGlobe"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 611;
export const Y = 515;
export const Height = 232;
export const Interactive= true
export const Width = 154;
export const Alpha = 1;
export let Scale = 1;

 
