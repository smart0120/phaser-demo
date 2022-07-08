
        import _Barstool2 from './images/Barstool2.png'
let paths = [
        ['HomeKitchen_Barstool2', _Barstool2, 19],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Barstool2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Barstool2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1223;
export const Y = 626;
export const Height = 319;
export const Interactive= true
export const Width = 178;
export const Alpha = 1;
export let Scale = 1;

 
