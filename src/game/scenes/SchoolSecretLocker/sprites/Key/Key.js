
        import _Key from './images/Key.png'
let paths = [
        ['SchoolSecretLocker_Key', _Key, 8],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Key_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Key"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 992;
export const Y = 906;
export const Height = 96;
export const Interactive= true
export const Width = 271;
export const Alpha = 1;
export let Scale = 1;

 
