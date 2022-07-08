
        import _Bin from './images/Bin.png'
let paths = [
        ['SchoolNurseRoom_Bin', _Bin, 9],
      
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
export const X = 942;
export const Y = 503;
export const Height = 172;
export const Interactive= true
export const Width = 71;
export const Alpha = 1;
export let Scale = 1;

 
