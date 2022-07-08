
        import _MmmDoughnuts from './images/MmmDoughnuts.png'
let paths = [
        ['SchoolCafeteria_MmmDoughnuts', _MmmDoughnuts, 52],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./MmmDoughnuts_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "MmmDoughnuts"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 930;
export const Y = 0;
export const Height = 541;
export const Interactive= true
export const Width = 55;
export const Alpha = 1;
export let Scale = 1;

 
