
        import _Panel1 from './images/Panel1.png'
let paths = [
        ['SchoolSecretLocker_Panel1', _Panel1, 4],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Panel1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Panel1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 830;
export const Y = 418;
export const Height = 445;
export const Interactive= true
export const Width = 382;
export const Alpha = 1;
export let Scale = 1;

 
