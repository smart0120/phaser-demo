
        import _D2 from './images/D2.png'
let paths = [
        ['HomeKitchen_D2', _D2, 16],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./D2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "D2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 444;
export const Y = 667;
export const Height = 85;
export const Interactive= true
export const Width = 188;
export const Alpha = 1;
export let Scale = 1;

 
