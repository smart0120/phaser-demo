
        import _House from './images/House.png'
let paths = [
        ['SchoolForestGlade_House', _House, 7],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./House_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "House"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 419;
export const Y = 391;
export const Height = 286;
export const Interactive= true
export const Width = 332;
export const Alpha = 1;
export let Scale = 1;

 
