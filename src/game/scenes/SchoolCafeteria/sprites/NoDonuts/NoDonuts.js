
        import _NoDonuts from './images/NoDonuts.png'
let paths = [
        ['SchoolCafeteria_NoDonuts', _NoDonuts, 58],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./NoDonuts_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "NoDonuts"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 435;
export const Y = 399;
export const Height = 22;
export const Interactive= true
export const Width = 51;
export const Alpha = 1;
export let Scale = 1;

 
