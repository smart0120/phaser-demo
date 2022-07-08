
        import _Bird4Ground from './images/Bird4Ground.png'
let paths = [
        ['SchoolForestGlade_Bird4Ground', _Bird4Ground, 61],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bird4Ground_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bird4Ground"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1180;
export const Y = 636;
export const Height = 40;
export const Interactive= true
export const Width = 59;
export const Alpha = 1;
export let Scale = 1;

 
