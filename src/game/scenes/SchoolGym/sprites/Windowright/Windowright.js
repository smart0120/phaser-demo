
        import _Windowright from './images/Windowright.png'
let paths = [
        ['SchoolGym_Windowright', _Windowright, 4],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Windowright_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Windowright"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 739;
export const Y = 288;
export const Height = 88;
export const Interactive= true
export const Width = 238;
export const Alpha = 1;
export let Scale = 1;

 
