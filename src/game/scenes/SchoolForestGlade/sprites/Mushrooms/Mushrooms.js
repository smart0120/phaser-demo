
        import _Mushrooms from './images/Mushrooms.png'
let paths = [
        ['SchoolForestGlade_Mushrooms', _Mushrooms, 27],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Mushrooms_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Mushrooms"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1370;
export const Y = 922;
export const Height = 156;
export const Interactive= true
export const Width = 197;
export const Alpha = 1;
export let Scale = 1;

 
