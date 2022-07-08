
        import _Flashdrive from './images/Flashdrive.png'
let paths = [
        ['HomeBedroom_Flashdrive', _Flashdrive, 19],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Flashdrive_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Flashdrive"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1511;
export const Y = 650;
export const Height = 24;
export const Interactive= true
export const Width = 52;
export const Alpha = 1;
export let Scale = 1;

 
