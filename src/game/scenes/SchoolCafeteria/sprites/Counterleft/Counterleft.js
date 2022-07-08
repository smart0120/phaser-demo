
        import _Counterleft from './images/Counterleft.png'
let paths = [
        ['SchoolCafeteria_Counterleft', _Counterleft, 12],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Counterleft_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Counterleft"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 434;
export const Y = 454;
export const Height = 193;
export const Interactive= true
export const Width = 174;
export const Alpha = 1;
export let Scale = 1;

 
