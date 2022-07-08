
        import _Plant from './images/Plant.png'
let paths = [
        ['HomeKitchen_Plant', _Plant, 26],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Plant_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Plant"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1058;
export const Y = 517;
export const Height = 105;
export const Interactive= true
export const Width = 83;
export const Alpha = 1;
export let Scale = 1;

 
