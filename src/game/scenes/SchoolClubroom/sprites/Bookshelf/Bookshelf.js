
        import _Bookshelf from './images/Bookshelf.png'
let paths = [
        ['SchoolClubroom_Bookshelf', _Bookshelf, 18],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bookshelf_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bookshelf"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1476;
export const Y = 16;
export const Height = 913;
export const Interactive= true
export const Width = 306;
export const Alpha = 1;
export let Scale = 1;

 
