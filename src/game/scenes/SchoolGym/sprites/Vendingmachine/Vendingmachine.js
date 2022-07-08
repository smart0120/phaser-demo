
        import _Vendingmachine from './images/Vendingmachine.png'
let paths = [
        ['SchoolGym_Vendingmachine', _Vendingmachine, 13],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Vendingmachine_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Vendingmachine"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 515;
export const Height = 143;
export const Interactive= true
export const Width = 91;
export const Alpha = 1;
export let Scale = 1;

 
