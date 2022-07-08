
        import _C1 from './images/C1.png'
let paths = [
        ['HomeKitchen_C1', _C1, 10],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./C1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "C1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1009;
export const Y = 327;
export const Height = 148;
export const Interactive= true
export const Width = 58;
export const Alpha = 1;
export let Scale = 1;

 
