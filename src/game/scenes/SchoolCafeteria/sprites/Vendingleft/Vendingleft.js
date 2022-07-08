
        import _Vendingleft from './images/Vendingleft.png'
let paths = [
        ['SchoolCafeteria_Vendingleft', _Vendingleft, 16],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Vendingleft_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Vendingleft"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 165;
export const Y = 268;
export const Height = 545;
export const Interactive= true
export const Width = 232;
export const Alpha = 1;
export let Scale = 1;

 
