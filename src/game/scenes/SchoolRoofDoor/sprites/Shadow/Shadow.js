
        import _Shadow from './images/Shadow.png'
let paths = [
        ['SchoolRoofDoor_Shadow', _Shadow, 13],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Shadow_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Shadow"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 376;
export const Height = 704;
export const Interactive= true
export const Width = 1920;
export const Alpha = 1;
export let Scale = 1;

 
