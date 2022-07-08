
        import _BookshelveLeft from './images/BookshelveLeft.png'
let paths = [
        ['HomeBedroom_BookshelveLeft', _BookshelveLeft, 20],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./BookshelveLeft_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "BookshelveLeft"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 135;
export const Y = 359;
export const Height = 504;
export const Interactive= true
export const Width = 363;
export const Alpha = 1;
export let Scale = 1;

 
