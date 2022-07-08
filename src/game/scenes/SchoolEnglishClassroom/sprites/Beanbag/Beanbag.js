
        import _Beanbag from './images/Beanbag.png'
let paths = [
        ['SchoolEnglishClassroom_Beanbag', _Beanbag, 15],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Beanbag_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Beanbag"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 368;
export const Height = 348;
export const Interactive= true
export const Width = 328;
export const Alpha = 1;
export let Scale = 1;

 
