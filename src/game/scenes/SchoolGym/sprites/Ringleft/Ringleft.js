
        import _Ringleft from './images/Ringleft.png'
let paths = [
        ['SchoolGym_Ringleft', _Ringleft, 17],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Ringleft_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Ringleft"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 106;
export const Y = 0;
export const Height = 106;
export const Interactive= true
export const Width = 171;
export const Alpha = 1;
export let Scale = 1;

 
