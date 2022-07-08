
        import _Pot from './images/Pot.png'
let paths = [
        ['SchoolAdminWing_Pot', _Pot, 10],
      
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
export const X = 1344;
export const Y = 469;
export const Height = 105;
export const Interactive= true
export const Width = 78;
export const Alpha = 1;
export let Scale = 1;

 
