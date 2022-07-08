
        import _Paper from './images/Paper.png'
let paths = [
        ['SchoolNurseRoom_Paper', _Paper, 38],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Paper_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Paper"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 473;
export const Y = 725;
export const Height = 57;
export const Interactive= true
export const Width = 163;
export const Alpha = 1;
export let Scale = 1;

 
