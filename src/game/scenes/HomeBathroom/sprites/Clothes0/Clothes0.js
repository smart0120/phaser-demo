
        import _Clothes0 from './images/Clothes0.png'
let paths = [
        ['HomeBathroom_Clothes0', _Clothes0, 18],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Clothes0_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Clothes0"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1495;
export const Y = 560;
export const Height = 76;
export const Interactive= true
export const Width = 191;
export const Alpha = 1;
export let Scale = 1;

 
