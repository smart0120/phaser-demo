
        import _LampKettle from './images/LampKettle.png'
let paths = [
        ['HomeKitchen_LampKettle', _LampKettle, 67],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./LampKettle_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "LampKettle"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 719;
export const Y = 430;
export const Height = 156;
export const Interactive= true
export const Width = 197;
export const Alpha = 1;
export let Scale = 1;

 
