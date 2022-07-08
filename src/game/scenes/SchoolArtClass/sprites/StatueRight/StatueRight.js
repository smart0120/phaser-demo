
        import _StatueRight from './images/StatueRight.png'
let paths = [
        ['SchoolArtClass_StatueRight', _StatueRight, 19],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./StatueRight_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "StatueRight"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1404;
export const Y = 333;
export const Height = 363;
export const Interactive= true
export const Width = 111;
export const Alpha = 1;
export let Scale = 1;

 
