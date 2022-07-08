
        import _Plantsleft from './images/Plantsleft.png'
let paths = [
        ['SchoolRoof_Plantsleft', _Plantsleft, 3],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Plantsleft_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Plantsleft"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 179;
export const Y = 918;
export const Height = 162;
export const Interactive= true
export const Width = 255;
export const Alpha = 1;
export let Scale = 1;

 
