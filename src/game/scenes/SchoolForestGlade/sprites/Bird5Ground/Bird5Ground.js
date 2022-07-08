
        import _Bird5Ground from './images/Bird5Ground.png'
let paths = [
        ['SchoolForestGlade_Bird5Ground', _Bird5Ground, 57],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bird5Ground_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bird5Ground"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 823;
export const Y = 597;
export const Height = 39;
export const Interactive= true
export const Width = 60;
export const Alpha = 1;
export let Scale = 1;

 
