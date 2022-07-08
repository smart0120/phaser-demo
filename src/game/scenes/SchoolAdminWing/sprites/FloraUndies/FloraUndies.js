
        import _FloraUndies from './images/FloraUndies.png'
let paths = [
        ['SchoolAdminWing_FloraUndies', _FloraUndies, 25],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./FloraUndies_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "FloraUndies"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 375;
export const Y = 277;
export const Height = 744;
export const Interactive= true
export const Width = 285;
export const Alpha = 1;
export let Scale = 1;

 
