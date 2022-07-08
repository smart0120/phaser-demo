
        import _Eraser from './images/Eraser.png'
let paths = [
        ['SchoolHomeroom_Eraser', _Eraser, 34],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Eraser_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Eraser"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1173;
export const Y = 761;
export const Height = 35;
export const Interactive= true
export const Width = 65;
export const Alpha = 1;
export let Scale = 1;

 
