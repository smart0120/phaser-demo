
        import _Ball3 from './images/Ball3.png'
let paths = [
        ['SchoolGym_Ball3', _Ball3, 25],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Ball3_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Ball3"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1073;
export const Y = 925;
export const Height = 128;
export const Interactive= true
export const Width = 155;
export const Alpha = 1;
export let Scale = 1;

 
