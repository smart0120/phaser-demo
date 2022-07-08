
        import _Candy7 from './images/Candy7.png'
let paths = [
        ['SchoolArtClass_Candy7', _Candy7, 47],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Candy7_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Candy7"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1710;
export const Y = 735;
export const Height = 29;
export const Interactive= true
export const Width = 47;
export const Alpha = 1;
export let Scale = 1;

 
