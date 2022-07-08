
        import _MF from './images/MF.png'
let paths = [
        ['HomeKitchen_MF', _MF, 18],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./MF_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "MF"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 831;
export const Y = 669;
export const Height = 191;
export const Interactive= true
export const Width = 119;
export const Alpha = 1;
export let Scale = 1;

 
