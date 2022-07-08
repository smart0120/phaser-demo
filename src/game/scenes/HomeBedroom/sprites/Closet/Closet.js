
        import _Closet from './images/Closet.png'
let paths = [
        ['HomeBedroom_Closet', _Closet, 6],
      
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
export const X = 943;
export const Y = 332;
export const Height = 398;
export const Interactive= true
export const Width = 243;
export const Alpha = 1;
export let Scale = 1;

 
