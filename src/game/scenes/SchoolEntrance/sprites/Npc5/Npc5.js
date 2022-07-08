
        import _Npc5 from './images/Npc5.png'
let paths = [
        ['SchoolEntrance_Npc5', _Npc5, 42],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Npc5_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Npc5"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 169;
export const Y = 764;
export const Height = 324;
export const Interactive= true
export const Width = 145;
export const Alpha = 1;
export let Scale = 1;

 
