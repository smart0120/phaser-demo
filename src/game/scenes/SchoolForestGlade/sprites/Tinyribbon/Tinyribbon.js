
        import _Tinyribbon from './images/Tinyribbon.png'
let paths = [
        ['SchoolForestGlade_Tinyribbon', _Tinyribbon, 80],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Tinyribbon_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Tinyribbon"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 257;
export const Y = 959;
export const Height = 37;
export const Interactive= true
export const Width = 60;
export const Alpha = 1;
export let Scale = 1;

 
