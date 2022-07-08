
        import _Wbeaver2 from './images/Wbeaver2.png'
let paths = [
        ['SchoolEntrance_Wbeaver2', _Wbeaver2, 25],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Wbeaver2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Wbeaver2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 685;
export const Y = 1024;
export const Height = 43;
export const Interactive= true
export const Width = 60;
export const Alpha = 1;
export let Scale = 1;

 
