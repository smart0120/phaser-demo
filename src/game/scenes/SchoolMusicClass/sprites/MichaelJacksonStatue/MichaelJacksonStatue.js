
        import _MichaelJacksonStatue from './images/MichaelJacksonStatue.png'
let paths = [
        ['SchoolMusicClass_MichaelJacksonStatue', _MichaelJacksonStatue, 22],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./MichaelJacksonStatue_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "MichaelJacksonStatue"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 846;
export const Y = 520;
export const Height = 560;
export const Interactive= true
export const Width = 258;
export const Alpha = 1;
export let Scale = 1;

 
