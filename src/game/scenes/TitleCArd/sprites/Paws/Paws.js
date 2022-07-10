
        import _Paws from './images/Paws.png'
let paths = [
        ['TitleCArd_Paws', _Paws, 9],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Paws_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Paws"
export const Id = 22;
export const GroupId = "0,1,2,-1"
export const Visible = true
export const X = 724;
export const Y = 0;
export const Height = 1070;
export const Interactive= true
export const Width = 1189;
export const Alpha = 1;
export let Scale = 1;

 
