
        import _Furniture03 from './images/Furniture03.png'
let paths = [
        ['HomeKitchen_Furniture03', _Furniture03, 4],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Furniture03_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Furniture03"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1028;
export const Y = 524;
export const Height = 264;
export const Interactive= true
export const Width = 404;
export const Alpha = 1;
export let Scale = 1;

 
