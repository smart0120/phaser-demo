
        import _Triangle from './images/Triangle.png'
let paths = [
        ['SchoolMusicClass_Triangle', _Triangle, 13],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Triangle_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Triangle"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 840;
export const Y = 0;
export const Height = 334;
export const Interactive= true
export const Width = 80;
export const Alpha = 1;
export let Scale = 1;

 
