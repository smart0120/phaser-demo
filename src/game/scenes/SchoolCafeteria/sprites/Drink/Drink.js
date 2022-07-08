
        import _Drink from './images/Drink.png'
let paths = [
        ['SchoolCafeteria_Drink', _Drink, 11],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Drink_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Drink"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1563;
export const Y = 420;
export const Height = 157;
export const Interactive= true
export const Width = 268;
export const Alpha = 1;
export let Scale = 1;

 
