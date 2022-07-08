
        import _Books from './images/Books.png'
let paths = [
        ['SchoolEnglishClassroom_Books', _Books, 30],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Books_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Books"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1153;
export const Y = 832;
export const Height = 248;
export const Interactive= true
export const Width = 643;
export const Alpha = 1;
export let Scale = 1;

 
