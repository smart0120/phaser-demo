
        import _BooksFloor from './images/BooksFloor.png'
let paths = [
        ['HomeBedroom_BooksFloor', _BooksFloor, 41],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./BooksFloor_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "BooksFloor"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 725;
export const Y = 801;
export const Height = 186;
export const Interactive= true
export const Width = 857;
export const Alpha = 1;
export let Scale = 1;

 
