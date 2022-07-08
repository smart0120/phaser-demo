
        import _CatYarn from './images/CatYarn.png'
let paths = [
        ['SchoolClubroom_CatYarn', _CatYarn, 35],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./CatYarn_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "CatYarn"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1161;
export const Y = 803;
export const Height = 99;
export const Interactive= true
export const Width = 167;
export const Alpha = 1;
export let Scale = 1;

 
