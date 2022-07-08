
        import _ChairLeft from './images/ChairLeft.png'
let paths = [
        ['SchoolEnglishClassroom_ChairLeft', _ChairLeft, 35],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./ChairLeft_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "ChairLeft"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 30;
export const Y = 764;
export const Height = 384;
export const Interactive= true
export const Width = 317;
export const Alpha = 1;
export let Scale = 1;

 
