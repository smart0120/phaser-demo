
        import _Book from './images/Book.png'
let paths = [
        ['SchoolArtClass_Book', _Book, 36],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Book_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Book"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 230;
export const Y = 472;
export const Height = 67;
export const Interactive= true
export const Width = 19;
export const Alpha = 1;
export let Scale = 1;

 
