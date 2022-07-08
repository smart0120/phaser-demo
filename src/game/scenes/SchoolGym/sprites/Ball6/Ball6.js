
        import _Ball6 from './images/Ball6.png'
let paths = [
        ['SchoolGym_Ball6', _Ball6, 22],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Ball6_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Ball6"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1824;
export const Y = 707;
export const Height = 35;
export const Interactive= true
export const Width = 49;
export const Alpha = 1;
export let Scale = 1;

 
