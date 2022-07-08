
        import _Emptybasket from './images/Emptybasket.png'
let paths = [
        ['HomeBathroom_Emptybasket', _Emptybasket, 8],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Emptybasket_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Emptybasket"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 554;
export const Y = 862;
export const Height = 200;
export const Interactive= true
export const Width = 312;
export const Alpha = 1;
export let Scale = 1;

 
