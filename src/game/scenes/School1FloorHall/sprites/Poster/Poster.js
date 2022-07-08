
        import _Poster from './images/Poster.png'
let paths = [
        ['School1FloorHall_Poster', _Poster, 62],
      
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
export const X = 104;
export const Y = 484;
export const Height = 36;
export const Interactive= true
export const Width = 25;
export const Alpha = 1;
export let Scale = 1;

 
