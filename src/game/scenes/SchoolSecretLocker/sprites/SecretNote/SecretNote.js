
        import _SecretNote from './images/SecretNote.png'
let paths = [
        ['SchoolSecretLocker_SecretNote', _SecretNote, 5],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./SecretNote_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "SecretNote"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 799;
export const Y = 614;
export const Height = 331;
export const Interactive= true
export const Width = 312;
export const Alpha = 1;
export let Scale = 1;

 
