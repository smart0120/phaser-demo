
        import _Ball1 from './images/Ball1.png'
let paths = [
        ['SchoolGym_Ball1', _Ball1, 27],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Ball1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Ball1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 67;
export const Y = 700;
export const Height = 38;
export const Interactive= true
export const Width = 33;
export const Alpha = 1;
export let Scale = 1;

 
