
        import _Chocolate from './images/Chocolate.png'
let paths = [
        ['SchoolLocker_Chocolate', _Chocolate, 4],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Chocolate_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Chocolate"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1059;
export const Y = 728;
export const Height = 214;
export const Interactive= true
export const Width = 242;
export const Alpha = 1;
export let Scale = 1;

 
