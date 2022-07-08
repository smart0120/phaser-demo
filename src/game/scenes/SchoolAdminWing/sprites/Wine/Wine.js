
        import _Wine from './images/Wine.png'
let paths = [
        ['SchoolAdminWing_Wine', _Wine, 14],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Wine_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Wine"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 889;
export const Y = 280;
export const Height = 61;
export const Interactive= true
export const Width = 22;
export const Alpha = 1;
export let Scale = 1;

 
