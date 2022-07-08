
        import _Poster from './images/Poster.png'
let paths = [
        ['HomeBathroom_Poster', _Poster, 3],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Poster_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Poster"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1364;
export const Y = 210;
export const Height = 116;
export const Interactive= true
export const Width = 48;
export const Alpha = 1;
export let Scale = 1;

 
