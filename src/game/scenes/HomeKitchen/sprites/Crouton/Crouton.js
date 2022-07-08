
        import _Crouton from './images/Crouton.png'
let paths = [
        ['HomeKitchen_Crouton', _Crouton, 51],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Crouton_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Crouton"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1005;
export const Y = 569;
export const Height = 61;
export const Interactive= true
export const Width = 63;
export const Alpha = 1;
export let Scale = 1;

 
