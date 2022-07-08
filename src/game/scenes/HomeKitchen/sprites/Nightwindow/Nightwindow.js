
        import _Nightwindow from './images/Nightwindow.png'
let paths = [
        ['HomeKitchen_Nightwindow', _Nightwindow, 2],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Nightwindow_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Nightwindow"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1160;
export const Y = 289;
export const Height = 270;
export const Interactive= true
export const Width = 220;
export const Alpha = 1;
export let Scale = 1;

 
