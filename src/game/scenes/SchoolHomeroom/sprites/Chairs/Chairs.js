
        import _Chairs from './images/Chairs.png'
let paths = [
        ['SchoolHomeroom_Chairs', _Chairs, 22],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Chairs_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Chairs"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 45;
export const Y = 667;
export const Height = 413;
export const Interactive= true
export const Width = 1443;
export const Alpha = 1;
export let Scale = 1;

 
