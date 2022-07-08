
        import _Clothes from './images/Clothes.png'
let paths = [
        ['HomeBedroom_Clothes', _Clothes, 44],
      
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
export const X = 897;
export const Y = 848;
export const Height = 225;
export const Interactive= true
export const Width = 361;
export const Alpha = 1;
export let Scale = 1;

 
