
        import _Shelf from './images/Shelf.png'
let paths = [
        ['SchoolArtClass_Shelf', _Shelf, 3],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Shelf_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Shelf"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 54;
export const Y = 214;
export const Height = 550;
export const Interactive= true
export const Width = 579;
export const Alpha = 1;
export let Scale = 1;

 
