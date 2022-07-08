
        import _ChairQ2 from './images/ChairQ2.png'
let paths = [
        ['SchoolCafeteria_ChairQ2', _ChairQ2, 20],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./ChairQ2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "ChairQ2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 720;
export const Y = 482;
export const Height = 202;
export const Interactive= true
export const Width = 127;
export const Alpha = 1;
export let Scale = 1;

 
