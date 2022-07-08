
        import _Bookclutter from './images/Bookclutter.png'
let paths = [
        ['Vines_Bookclutter', _Bookclutter, 148],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bookclutter_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bookclutter"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 56;
export const Y = 116;
export const Height = 46;
export const Interactive= true
export const Width = 82;
export const Alpha = 1;
export let Scale = 1;

 
