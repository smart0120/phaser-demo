
        import _Freshener from './images/Freshener.png'
let paths = [
        ['HomeHall_Freshener', _Freshener, 16],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Freshener_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Freshener"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1475;
export const Y = 340;
export const Height = 54;
export const Interactive= true
export const Width = 33;
export const Alpha = 1;
export let Scale = 1;

 
