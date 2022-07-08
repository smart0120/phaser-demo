
        import _Windowleft from './images/Windowleft.png'
let paths = [
        ['SchoolGym_Windowleft', _Windowleft, 3],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Windowleft_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Windowleft"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 203;
export const Height = 117;
export const Interactive= true
export const Width = 318;
export const Alpha = 1;
export let Scale = 1;

 
