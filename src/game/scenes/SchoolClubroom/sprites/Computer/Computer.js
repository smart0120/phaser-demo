
        import _Computer from './images/Computer.png'
let paths = [
        ['SchoolClubroom_Computer', _Computer, 15],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Computer_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Computer"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 594;
export const Y = 542;
export const Height = 200;
export const Interactive= true
export const Width = 254;
export const Alpha = 1;
export let Scale = 1;

 
