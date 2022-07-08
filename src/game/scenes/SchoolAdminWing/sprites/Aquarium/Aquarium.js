
        import _Aquarium from './images/Aquarium.png'
let paths = [
        ['SchoolAdminWing_Aquarium', _Aquarium, 17],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Aquarium_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Aquarium"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 241;
export const Y = 253;
export const Height = 619;
export const Interactive= true
export const Width = 309;
export const Alpha = 1;
export let Scale = 1;

 
