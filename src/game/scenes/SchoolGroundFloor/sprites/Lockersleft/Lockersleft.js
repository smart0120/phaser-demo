
        import _Lockersleft from './images/Lockersleft.png'
let paths = [
        ['SchoolGroundFloor_Lockersleft', _Lockersleft, 9],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Lockersleft_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Lockersleft"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 324;
export const Y = 551;
export const Height = 151;
export const Interactive= true
export const Width = 128;
export const Alpha = 1;
export let Scale = 1;

 
