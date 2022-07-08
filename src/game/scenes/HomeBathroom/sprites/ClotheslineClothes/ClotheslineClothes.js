
        import _ClotheslineClothes from './images/ClotheslineClothes.png'
let paths = [
        ['HomeBathroom_ClotheslineClothes', _ClotheslineClothes, 22],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./ClotheslineClothes_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "ClotheslineClothes"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1033;
export const Y = 0;
export const Height = 318;
export const Interactive= true
export const Width = 526;
export const Alpha = 1;
export let Scale = 1;

 
