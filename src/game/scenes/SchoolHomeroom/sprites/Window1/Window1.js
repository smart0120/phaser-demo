
        import _Window1 from './images/Window1.png'
let paths = [
        ['SchoolHomeroom_Window1', _Window1, 3],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Window1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Window1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 49;
export const Height = 658;
export const Interactive= true
export const Width = 362;
export const Alpha = 1;
export let Scale = 1;

 
