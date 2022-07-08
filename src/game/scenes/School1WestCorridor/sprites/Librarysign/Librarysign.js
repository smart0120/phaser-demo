
        import _Librarysign from './images/Librarysign.png'
let paths = [
        ['School1WestCorridor_Librarysign', _Librarysign, 3],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Librarysign_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Librarysign"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 906;
export const Y = 232;
export const Height = 53;
export const Interactive= true
export const Width = 102;
export const Alpha = 1;
export let Scale = 1;

 
