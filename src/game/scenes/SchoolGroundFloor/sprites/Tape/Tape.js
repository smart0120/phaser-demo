
        import _Tape from './images/Tape.png'
let paths = [
        ['SchoolGroundFloor_Tape', _Tape, 32],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Tape_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Tape"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 402;
export const Y = 585;
export const Height = 73;
export const Interactive= true
export const Width = 44;
export const Alpha = 1;
export let Scale = 1;

 
