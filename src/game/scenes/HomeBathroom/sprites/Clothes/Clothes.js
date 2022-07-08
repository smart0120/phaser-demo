
        import _Clothes from './images/Clothes.png'
let paths = [
        ['HomeBathroom_Clothes', _Clothes, 9],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Clothes_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Clothes"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 562;
export const Y = 837;
export const Height = 213;
export const Interactive= true
export const Width = 324;
export const Alpha = 1;
export let Scale = 1;

 
