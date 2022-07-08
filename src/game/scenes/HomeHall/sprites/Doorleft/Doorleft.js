
        import _Doorleft from './images/Doorleft.png'
let paths = [
        ['HomeHall_Doorleft', _Doorleft, 9],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Doorleft_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Doorleft"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 440;
export const Y = 251;
export const Height = 393;
export const Interactive= true
export const Width = 167;
export const Alpha = 1;
export let Scale = 1;

 
