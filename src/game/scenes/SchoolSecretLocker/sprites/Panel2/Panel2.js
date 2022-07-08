
        import _Panel2 from './images/Panel2.png'
let paths = [
        ['SchoolSecretLocker_Panel2', _Panel2, 3],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Panel2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Panel2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 784;
export const Y = 416;
export const Height = 473;
export const Interactive= true
export const Width = 429;
export const Alpha = 1;
export let Scale = 1;

 
