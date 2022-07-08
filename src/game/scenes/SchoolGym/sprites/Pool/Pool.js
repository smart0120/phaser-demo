
        import _Pool from './images/Pool.png'
let paths = [
        ['SchoolGym_Pool', _Pool, 51],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Pool_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Pool"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 427;
export const Y = 676;
export const Height = 164;
export const Interactive= true
export const Width = 339;
export const Alpha = 1;
export let Scale = 1;

 
