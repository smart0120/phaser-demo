
        import _Shoesbox from './images/Shoesbox.png'
let paths = [
        ['School1EastCorridor_Shoesbox', _Shoesbox, 15],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Shoesbox_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Shoesbox"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1238;
export const Y = 481;
export const Height = 398;
export const Interactive= true
export const Width = 429;
export const Alpha = 1;
export let Scale = 1;

 
