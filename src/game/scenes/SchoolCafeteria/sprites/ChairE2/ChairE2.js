
        import _ChairE2 from './images/ChairE2.png'
let paths = [
        ['SchoolCafeteria_ChairE2', _ChairE2, 26],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./ChairE2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "ChairE2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 451;
export const Y = 632;
export const Height = 433;
export const Interactive= true
export const Width = 261;
export const Alpha = 1;
export let Scale = 1;

 
