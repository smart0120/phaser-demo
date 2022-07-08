
        import _Wood from './images/Wood.png'
let paths = [
        ['SchoolForestGlade_Wood', _Wood, 26],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Wood_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Wood"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 874;
export const Y = 744;
export const Height = 182;
export const Interactive= true
export const Width = 234;
export const Alpha = 1;
export let Scale = 1;

 
