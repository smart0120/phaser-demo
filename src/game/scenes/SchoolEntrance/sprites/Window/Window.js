
        import _Window from './images/Window.png'
let paths = [
        ['SchoolEntrance_Window', _Window, 2],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Window_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Window"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 529;
export const Y = 651;
export const Height = 93;
export const Interactive= true
export const Width = 60;
export const Alpha = 1;
export let Scale = 1;

 
