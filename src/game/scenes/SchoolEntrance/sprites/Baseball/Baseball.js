
        import _Baseball from './images/Baseball.png'
let paths = [
        ['SchoolEntrance_Baseball', _Baseball, 23],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Baseball_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Baseball"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 545;
export const Y = 800;
export const Height = 16;
export const Interactive= true
export const Width = 17;
export const Alpha = 1;
export let Scale = 1;

 
