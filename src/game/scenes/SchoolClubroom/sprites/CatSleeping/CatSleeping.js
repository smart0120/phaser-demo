
        import _CatSleeping from './images/CatSleeping.png'
let paths = [
        ['SchoolClubroom_CatSleeping', _CatSleeping, 29],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./CatSleeping_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "CatSleeping"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1428;
export const Y = 749;
export const Height = 129;
export const Interactive= true
export const Width = 129;
export const Alpha = 1;
export let Scale = 1;

 
