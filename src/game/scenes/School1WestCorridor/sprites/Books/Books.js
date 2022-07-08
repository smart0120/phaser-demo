
        import _Books from './images/Books.png'
let paths = [
        ['School1WestCorridor_Books', _Books, 20],
      
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
export const X = 1220;
export const Y = 312;
export const Height = 221;
export const Interactive= true
export const Width = 39;
export const Alpha = 1;
export let Scale = 1;

 
