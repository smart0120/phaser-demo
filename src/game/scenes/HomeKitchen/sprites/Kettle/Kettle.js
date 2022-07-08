
        import _Kettle from './images/Kettle.png'
let paths = [
        ['HomeKitchen_Kettle', _Kettle, 23],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Kettle_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Kettle"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 691;
export const Y = 521;
export const Height = 95;
export const Interactive= true
export const Width = 117;
export const Alpha = 1;
export let Scale = 1;

 
