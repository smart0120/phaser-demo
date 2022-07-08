
        import _Chair from './images/Chair.png'
let paths = [
        ['HomeBedroom_Chair', _Chair, 43],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Chair_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Chair"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1159;
export const Y = 600;
export const Height = 294;
export const Interactive= true
export const Width = 207;
export const Alpha = 1;
export let Scale = 1;

 
