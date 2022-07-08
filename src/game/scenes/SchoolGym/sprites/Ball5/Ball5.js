
        import _Ball5 from './images/Ball5.png'
let paths = [
        ['SchoolGym_Ball5', _Ball5, 23],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Ball5_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Ball5"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1250;
export const Y = 704;
export const Height = 48;
export const Interactive= true
export const Width = 59;
export const Alpha = 1;
export let Scale = 1;

 
