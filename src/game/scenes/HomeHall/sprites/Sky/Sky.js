
        import _Sky from './images/Sky.png'
let paths = [
        ['HomeHall_Sky', _Sky, 34],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Sky_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Sky"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1864;
export const Y = 123;
export const Height = 367;
export const Interactive= true
export const Width = 56;
export const Alpha = 1;
export let Scale = 1;

 
