
        import _Lizard from './images/Lizard.png'
let paths = [
        ['SchoolBathroom_Lizard', _Lizard, 16],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Lizard_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Lizard"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1578;
export const Y = 15;
export const Height = 89;
export const Interactive= true
export const Width = 47;
export const Alpha = 1;
export let Scale = 1;

 
