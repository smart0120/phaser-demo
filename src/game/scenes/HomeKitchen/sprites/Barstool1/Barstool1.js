
        import _Barstool1 from './images/Barstool1.png'
let paths = [
        ['HomeKitchen_Barstool1', _Barstool1, 20],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Barstool1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Barstool1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1087;
export const Y = 639;
export const Height = 351;
export const Interactive= true
export const Width = 196;
export const Alpha = 1;
export let Scale = 1;

 
