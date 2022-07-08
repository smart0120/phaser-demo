
        import _Boardmid from './images/Boardmid.png'
let paths = [
        ['SchoolComputerRoom_Boardmid', _Boardmid, 6],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Boardmid_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Boardmid"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 344;
export const Y = 296;
export const Height = 317;
export const Interactive= true
export const Width = 741;
export const Alpha = 1;
export let Scale = 1;

 
