
        import _KateCheerleaderXray from './images/KateCheerleaderXray.png'
let paths = [
        ['School1FloorHall_KateCheerleaderXray', _KateCheerleaderXray, 29],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./KateCheerleaderXray_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "KateCheerleaderXray"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 581;
export const Y = 424;
export const Height = 488;
export const Interactive= true
export const Width = 196;
export const Alpha = 1;
export let Scale = 1;

 
