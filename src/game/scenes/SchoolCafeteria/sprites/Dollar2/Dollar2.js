
        import _Dollar2 from './images/Dollar2.png'
let paths = [
        ['SchoolCafeteria_Dollar2', _Dollar2, 74],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Dollar2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Dollar2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 375;
export const Y = 484;
export const Height = 27;
export const Interactive= true
export const Width = 26;
export const Alpha = 1;
export let Scale = 1;

 
