
        import _Onion from './images/Onion.png'
let paths = [
        ['HomeKitchen_Onion', _Onion, 66],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Onion_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Onion"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 693;
export const Y = 574;
export const Height = 45;
export const Interactive= true
export const Width = 53;
export const Alpha = 1;
export let Scale = 1;

 
