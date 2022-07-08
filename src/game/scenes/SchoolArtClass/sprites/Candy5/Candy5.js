
        import _Candy5 from './images/Candy5.png'
let paths = [
        ['SchoolArtClass_Candy5', _Candy5, 49],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Candy5_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Candy5"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1560;
export const Y = 854;
export const Height = 31;
export const Interactive= true
export const Width = 40;
export const Alpha = 1;
export let Scale = 1;

 
