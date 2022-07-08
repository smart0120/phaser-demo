
        import _Book from './images/Book.png'
let paths = [
        ['HomeBedroom_Book', _Book, 55],
      
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
export const X = 231;
export const Y = 417;
export const Height = 61;
export const Interactive= true
export const Width = 33;
export const Alpha = 1;
export let Scale = 1;

 
