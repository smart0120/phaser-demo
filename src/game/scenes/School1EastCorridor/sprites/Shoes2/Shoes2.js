
        import _Shoes2 from './images/Shoes2.png'
let paths = [
        ['School1EastCorridor_Shoes2', _Shoes2, 17],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Shoes2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Shoes2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1263;
export const Y = 507;
export const Height = 17;
export const Interactive= true
export const Width = 11;
export const Alpha = 1;
export let Scale = 1;

 
