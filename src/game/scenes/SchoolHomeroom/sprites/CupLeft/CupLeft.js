
        import _CupLeft from './images/CupLeft.png'
let paths = [
        ['SchoolHomeroom_CupLeft', _CupLeft, 35],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./CupLeft_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "CupLeft"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1092;
export const Y = 698;
export const Height = 89;
export const Interactive= true
export const Width = 88;
export const Alpha = 1;
export let Scale = 1;

 
