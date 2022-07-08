
        import _Light from './images/Light.png'
let paths = [
        ['SchoolGym_Light', _Light, 2],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Light_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Light"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 843;
export const Y = 57;
export const Height = 113;
export const Interactive= true
export const Width = 36;
export const Alpha = 1;
export let Scale = 1;

 
