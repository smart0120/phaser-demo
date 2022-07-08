
        import _Earth from './images/Earth.png'
let paths = [
        ['SchoolForestGlade_Earth', _Earth, 13],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Earth_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Earth"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 797;
export const Y = 422;
export const Height = 293;
export const Interactive= true
export const Width = 409;
export const Alpha = 1;
export let Scale = 1;

 
