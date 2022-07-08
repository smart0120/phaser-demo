
        import _Note from './images/Note.png'
let paths = [
        ['HomeHall_Note', _Note, 22],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Note_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Note"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1398;
export const Y = 556;
export const Height = 28;
export const Interactive= true
export const Width = 81;
export const Alpha = 1;
export let Scale = 1;

 
