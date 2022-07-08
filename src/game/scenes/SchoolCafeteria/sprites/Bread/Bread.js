
        import _Bread from './images/Bread.png'
let paths = [
        ['SchoolCafeteria_Bread', _Bread, 8],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bread_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bread"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1491;
export const Y = 429;
export const Height = 83;
export const Interactive= true
export const Width = 65;
export const Alpha = 1;
export let Scale = 1;

 
