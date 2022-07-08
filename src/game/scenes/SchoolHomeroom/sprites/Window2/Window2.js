
        import _Window2 from './images/Window2.png'
let paths = [
        ['SchoolHomeroom_Window2', _Window2, 5],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Window2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Window2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 411;
export const Y = 278;
export const Height = 370;
export const Interactive= true
export const Width = 216;
export const Alpha = 1;
export let Scale = 1;

 
