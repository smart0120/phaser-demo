
        import _DesksBack from './images/DesksBack.png'
let paths = [
        ['SchoolHomeroom_DesksBack', _DesksBack, 18],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./DesksBack_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "DesksBack"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 88;
export const Y = 755;
export const Height = 260;
export const Interactive= true
export const Width = 1763;
export const Alpha = 1;
export let Scale = 1;

 
