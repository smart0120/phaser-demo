
        import _CupRight from './images/CupRight.png'
let paths = [
        ['SchoolHomeroom_CupRight', _CupRight, 36],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./CupRight_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "CupRight"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1238;
export const Y = 694;
export const Height = 89;
export const Interactive= true
export const Width = 88;
export const Alpha = 1;
export let Scale = 1;

 
