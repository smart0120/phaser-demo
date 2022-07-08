
        import _Yarn from './images/Yarn.png'
let paths = [
        ['SchoolHomeroom_Yarn', _Yarn, 21],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Yarn_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Yarn"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 155;
export const Y = 696;
export const Height = 114;
export const Interactive= true
export const Width = 158;
export const Alpha = 1;
export let Scale = 1;

 
