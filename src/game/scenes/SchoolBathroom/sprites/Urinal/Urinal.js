
        import _Urinal from './images/Urinal.png'
let paths = [
        ['SchoolBathroom_Urinal', _Urinal, 4],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Urinal_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Urinal"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1447;
export const Y = 446;
export const Height = 528;
export const Interactive= true
export const Width = 240;
export const Alpha = 1;
export let Scale = 1;

 
