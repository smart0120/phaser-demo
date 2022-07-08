
        import _Post from './images/Post.png'
let paths = [
        ['SchoolLocker_Post', _Post, 2],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Post_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Post"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 783;
export const Y = 367;
export const Height = 371;
export const Interactive= true
export const Width = 213;
export const Alpha = 1;
export let Scale = 1;

 
