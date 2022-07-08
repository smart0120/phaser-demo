
        import _Flora from './images/Flora.png'
let paths = [
        ['SchoolAdminWing_Flora', _Flora, 26],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Flora_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Flora"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 375;
export const Y = 277;
export const Height = 744;
export const Interactive= true
export const Width = 285;
export const Alpha = 1;
export let Scale = 1;

 
