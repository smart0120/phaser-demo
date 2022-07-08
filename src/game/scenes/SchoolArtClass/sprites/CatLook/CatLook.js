
        import _CatLook from './images/CatLook.png'
let paths = [
        ['SchoolArtClass_CatLook', _CatLook, 45],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./CatLook_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "CatLook"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1229;
export const Y = 671;
export const Height = 132;
export const Interactive= true
export const Width = 120;
export const Alpha = 1;
export let Scale = 1;

 
