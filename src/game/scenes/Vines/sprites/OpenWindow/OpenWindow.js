
        import _OpenWindow from './images/OpenWindow.png'
let paths = [
        ['Vines_OpenWindow', _OpenWindow, 117],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./OpenWindow_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "OpenWindow"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 136;
export const Y = 514;
export const Height = 70;
export const Interactive= true
export const Width = 37;
export const Alpha = 1;
export let Scale = 1;

 
