
        import _Security from './images/Security.png'
let paths = [
        ['SchoolCafeteria_Security', _Security, 1],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Security_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Security"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1662;
export const Y = 203;
export const Height = 375;
export const Interactive= true
export const Width = 219;
export const Alpha = 1;
export let Scale = 1;

 
