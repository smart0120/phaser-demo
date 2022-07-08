
        import _Glassdome from './images/Glassdome.png'
let paths = [
        ['SchoolAdminWing_Glassdome', _Glassdome, 19],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Glassdome_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Glassdome"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1297;
export const Y = 449;
export const Height = 128;
export const Interactive= true
export const Width = 168;
export const Alpha = 1;
export let Scale = 1;

 
