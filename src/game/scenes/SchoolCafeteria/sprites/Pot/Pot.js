
        import _Pot from './images/Pot.png'
let paths = [
        ['SchoolCafeteria_Pot', _Pot, 45],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Pot_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Pot"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 517;
export const Y = 350;
export const Height = 69;
export const Interactive= true
export const Width = 70;
export const Alpha = 1;
export let Scale = 1;

 
