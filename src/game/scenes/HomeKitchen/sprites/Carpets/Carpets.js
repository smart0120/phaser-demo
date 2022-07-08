
        import _Carpets from './images/Carpets.png'
let paths = [
        ['HomeKitchen_Carpets', _Carpets, 3],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Carpets_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Carpets"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 241;
export const Y = 832;
export const Height = 248;
export const Interactive= true
export const Width = 1680;
export const Alpha = 1;
export let Scale = 1;

 
