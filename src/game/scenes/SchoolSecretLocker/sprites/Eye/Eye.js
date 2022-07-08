
        import _Eye from './images/Eye.png'
let paths = [
        ['SchoolSecretLocker_Eye', _Eye, 2],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Eye_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Eye"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 829;
export const Y = 511;
export const Height = 147;
export const Interactive= true
export const Width = 375;
export const Alpha = 1;
export let Scale = 1;

 
