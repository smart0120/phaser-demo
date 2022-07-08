
        import _BookshelfLeft from './images/BookshelfLeft.png'
let paths = [
        ['SchoolNurseRoom_BookshelfLeft', _BookshelfLeft, 24],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./BookshelfLeft_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "BookshelfLeft"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 133;
export const Height = 776;
export const Interactive= true
export const Width = 100;
export const Alpha = 1;
export let Scale = 1;

 
