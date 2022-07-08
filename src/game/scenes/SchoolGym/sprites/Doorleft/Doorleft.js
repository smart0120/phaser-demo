
        import _Doorleft from './images/Doorleft.png'
let paths = [
        ['SchoolGym_Doorleft', _Doorleft, 10],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Doorleft_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Doorleft"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 156;
export const Y = 477;
export const Height = 198;
export const Interactive= true
export const Width = 80;
export const Alpha = 1;
export let Scale = 1;

 
