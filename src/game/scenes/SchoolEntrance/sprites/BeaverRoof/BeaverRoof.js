
        import _BeaverRoof from './images/BeaverRoof.png'
let paths = [
        ['SchoolEntrance_BeaverRoof', _BeaverRoof, 27],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./BeaverRoof_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "BeaverRoof"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 567;
export const Y = 313;
export const Height = 26;
export const Interactive= true
export const Width = 38;
export const Alpha = 1;
export let Scale = 1;

 
