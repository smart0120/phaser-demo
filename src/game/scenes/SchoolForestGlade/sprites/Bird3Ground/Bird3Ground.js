
        import _Bird3Ground from './images/Bird3Ground.png'
let paths = [
        ['SchoolForestGlade_Bird3Ground', _Bird3Ground, 63],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bird3Ground_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bird3Ground"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 799;
export const Y = 626;
export const Height = 37;
export const Interactive= true
export const Width = 35;
export const Alpha = 1;
export let Scale = 1;

 
