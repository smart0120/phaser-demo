
        import _Cola from './images/Cola.png'
let paths = [
        ['SchoolArtClass_Cola', _Cola, 16],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Cola_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Cola"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 868;
export const Y = 423;
export const Height = 81;
export const Interactive= true
export const Width = 89;
export const Alpha = 1;
export let Scale = 1;

 
