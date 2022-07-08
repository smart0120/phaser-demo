
        import _Pot from './images/Pot.png'
let paths = [
        ['HomeKitchen_Pot', _Pot, 13],
      
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
export const X = 707;
export const Y = 446;
export const Height = 104;
export const Interactive= true
export const Width = 115;
export const Alpha = 1;
export let Scale = 1;

 
