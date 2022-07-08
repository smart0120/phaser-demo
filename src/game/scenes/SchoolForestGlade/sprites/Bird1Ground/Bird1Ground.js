
        import _Bird1Ground from './images/Bird1Ground.png'
let paths = [
        ['SchoolForestGlade_Bird1Ground', _Bird1Ground, 71],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bird1Ground_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bird1Ground"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 826;
export const Y = 671;
export const Height = 48;
export const Interactive= true
export const Width = 34;
export const Alpha = 1;
export let Scale = 1;

 
