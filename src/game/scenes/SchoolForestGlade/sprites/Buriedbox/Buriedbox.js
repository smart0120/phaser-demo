
        import _Buriedbox from './images/Buriedbox.png'
let paths = [
        ['SchoolForestGlade_Buriedbox', _Buriedbox, 76],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Buriedbox_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Buriedbox"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 260;
export const Y = 969;
export const Height = 77;
export const Interactive= true
export const Width = 91;
export const Alpha = 1;
export let Scale = 1;

 
