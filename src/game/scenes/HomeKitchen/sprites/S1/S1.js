
        import _S1 from './images/S1.png'
let paths = [
        ['HomeKitchen_S1', _S1, 8],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./S1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "S1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1507;
export const Y = 261;
export const Height = 338;
export const Interactive= true
export const Width = 228;
export const Alpha = 1;
export let Scale = 1;

 
