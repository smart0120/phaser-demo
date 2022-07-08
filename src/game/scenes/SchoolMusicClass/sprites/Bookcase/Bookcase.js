
        import _Bookcase from './images/Bookcase.png'
let paths = [
        ['SchoolMusicClass_Bookcase', _Bookcase, 15],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bookcase_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bookcase"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 6;
export const Y = 111;
export const Height = 833;
export const Interactive= true
export const Width = 296;
export const Alpha = 1;
export let Scale = 1;

 
