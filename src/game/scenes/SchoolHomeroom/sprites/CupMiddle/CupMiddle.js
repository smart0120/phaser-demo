
        import _CupMiddle from './images/CupMiddle.png'
let paths = [
        ['SchoolHomeroom_CupMiddle', _CupMiddle, 37],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./CupMiddle_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "CupMiddle"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1170;
export const Y = 710;
export const Height = 89;
export const Interactive= true
export const Width = 88;
export const Alpha = 1;
export let Scale = 1;

 
