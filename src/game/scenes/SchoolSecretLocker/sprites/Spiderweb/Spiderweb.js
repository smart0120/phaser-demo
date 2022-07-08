
        import _Spiderweb from './images/Spiderweb.png'
let paths = [
        ['SchoolSecretLocker_Spiderweb', _Spiderweb, 6],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Spiderweb_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Spiderweb"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 719;
export const Y = 348;
export const Height = 540;
export const Interactive= true
export const Width = 548;
export const Alpha = 1;
export let Scale = 1;

 
