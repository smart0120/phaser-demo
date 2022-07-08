
        import _Bush from './images/Bush.png'
let paths = [
        ['SchoolEntrance_Bush', _Bush, 5],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bush_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bush"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 73;
export const Y = 647;
export const Height = 185;
export const Interactive= true
export const Width = 323;
export const Alpha = 1;
export let Scale = 1;

 
