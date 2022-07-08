
        import _BooksDesk from './images/BooksDesk.png'
let paths = [
        ['SchoolNurseRoom_BooksDesk', _BooksDesk, 31],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./BooksDesk_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "BooksDesk"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 595;
export const Height = 138;
export const Interactive= true
export const Width = 227;
export const Alpha = 1;
export let Scale = 1;

 
