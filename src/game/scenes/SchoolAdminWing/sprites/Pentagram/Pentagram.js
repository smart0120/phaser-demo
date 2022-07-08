
        import _Pentagram from './images/Pentagram.png'
let paths = [
        ['SchoolAdminWing_Pentagram', _Pentagram, 39],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Pentagram_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Pentagram"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1213;
export const Y = 604;
export const Height = 122;
export const Interactive= true
export const Width = 336;
export const Alpha = 1;
export let Scale = 1;

 
