
        import _Laundry5 from './images/Laundry5.png'
let paths = [
        ['HomeBathroom_Laundry5', _Laundry5, 42],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Laundry5_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Laundry5"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 345;
export const Y = 935;
export const Height = 99;
export const Interactive= true
export const Width = 204;
export const Alpha = 1;
export let Scale = 1;

 
