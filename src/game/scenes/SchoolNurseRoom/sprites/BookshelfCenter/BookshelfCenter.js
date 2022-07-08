
        import _BookshelfCenter from './images/BookshelfCenter.png'
let paths = [
        ['SchoolNurseRoom_BookshelfCenter', _BookshelfCenter, 23],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./BookshelfCenter_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "BookshelfCenter"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 638;
export const Y = 312;
export const Height = 376;
export const Interactive= true
export const Width = 222;
export const Alpha = 1;
export let Scale = 1;

 
