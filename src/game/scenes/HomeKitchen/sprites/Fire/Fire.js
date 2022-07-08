
        import _Fire from './images/Fire.png'
let paths = [
        ['HomeKitchen_Fire', _Fire, 38],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Fire_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Fire"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1221;
export const Y = 314;
export const Height = 291;
export const Interactive= true
export const Width = 163;
export const Alpha = 1;
export let Scale = 1;

 
