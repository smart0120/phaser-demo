
        import _Trap from './images/Trap.png'
let paths = [
        ['SchoolForestGlade_Trap', _Trap, 32],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Trap_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Trap"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1381;
export const Y = 635;
export const Height = 37;
export const Interactive= true
export const Width = 139;
export const Alpha = 1;
export let Scale = 1;

 
