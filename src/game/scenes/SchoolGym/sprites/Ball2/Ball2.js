
        import _Ball2 from './images/Ball2.png'
let paths = [
        ['SchoolGym_Ball2', _Ball2, 26],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Ball2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Ball2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 175;
export const Y = 700;
export const Height = 46;
export const Interactive= true
export const Width = 53;
export const Alpha = 1;
export let Scale = 1;

 
