
        import _Bin from './images/Bin.png'
let paths = [
        ['School1FloorHall_Bin', _Bin, 12],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Bin_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Bin"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 77;
export const Y = 599;
export const Height = 94;
export const Interactive= true
export const Width = 67;
export const Alpha = 1;
export let Scale = 1;

 
