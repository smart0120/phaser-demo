
        import _AtticWindowlight from './images/AtticWindowlight.png'
let paths = [
        ['SchoolEntrance_AtticWindowlight', _AtticWindowlight, 50],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./AtticWindowlight_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "AtticWindowlight"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 221;
export const Y = 308;
export const Height = 25;
export const Interactive= true
export const Width = 81;
export const Alpha = 1;
export let Scale = 1;

 
