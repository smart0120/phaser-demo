
        import _Lindseyshirt from './images/Lindseyshirt.png'
let paths = [
        ['SchoolArtClass_Lindseyshirt', _Lindseyshirt, 59],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Lindseyshirt_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Lindseyshirt"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1229;
export const Y = 400;
export const Height = 643;
export const Interactive= true
export const Width = 224;
export const Alpha = 1;
export let Scale = 1;

 
