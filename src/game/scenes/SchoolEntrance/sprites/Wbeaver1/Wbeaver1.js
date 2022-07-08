
        import _Wbeaver1 from './images/Wbeaver1.png'
let paths = [
        ['SchoolEntrance_Wbeaver1', _Wbeaver1, 24],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Wbeaver1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Wbeaver1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 117;
export const Y = 888;
export const Height = 41;
export const Interactive= true
export const Width = 44;
export const Alpha = 1;
export let Scale = 1;

 
