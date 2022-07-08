
        import _Pillow from './images/Pillow.png'
let paths = [
        ['HomeBedroom_Pillow', _Pillow, 17],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Pillow_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Pillow"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 669;
export const Y = 722;
export const Height = 80;
export const Interactive= true
export const Width = 99;
export const Alpha = 1;
export let Scale = 1;

 
