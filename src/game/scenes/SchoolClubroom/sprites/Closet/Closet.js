
        import _Closet from './images/Closet.png'
let paths = [
        ['SchoolClubroom_Closet', _Closet, 6],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Closet_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Closet"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 254;
export const Y = 76;
export const Height = 737;
export const Interactive= true
export const Width = 267;
export const Alpha = 1;
export let Scale = 1;

 
