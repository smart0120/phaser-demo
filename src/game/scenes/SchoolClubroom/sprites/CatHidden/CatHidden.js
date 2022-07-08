
        import _CatHidden from './images/CatHidden.png'
let paths = [
        ['SchoolClubroom_CatHidden', _CatHidden, 28],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./CatHidden_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "CatHidden"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1362;
export const Y = 610;
export const Height = 31;
export const Interactive= true
export const Width = 30;
export const Alpha = 1;
export let Scale = 1;

 
