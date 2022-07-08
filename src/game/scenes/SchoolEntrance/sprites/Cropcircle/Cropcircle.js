
        import _Cropcircle from './images/Cropcircle.png'
let paths = [
        ['SchoolEntrance_Cropcircle', _Cropcircle, 37],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Cropcircle_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Cropcircle"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1436;
export const Y = 950;
export const Height = 116;
export const Interactive= true
export const Width = 348;
export const Alpha = 1;
export let Scale = 1;

 
