
        import _CatLick from './images/CatLick.png'
let paths = [
        ['SchoolClubroom_CatLick', _CatLick, 34],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./CatLick_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "CatLick"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1204;
export const Y = 767;
export const Height = 126;
export const Interactive= true
export const Width = 86;
export const Alpha = 1;
export let Scale = 1;

 
