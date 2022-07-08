
        import _PlantRight from './images/PlantRight.png'
let paths = [
        ['HomeKitchen_PlantRight', _PlantRight, 27],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./PlantRight_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "PlantRight"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1279;
export const Y = 528;
export const Height = 105;
export const Interactive= true
export const Width = 83;
export const Alpha = 1;
export let Scale = 1;

 
