
        import _Lipstickwriting from './images/Lipstickwriting.png'
let paths = [
        ['HomeBathroom_Lipstickwriting', _Lipstickwriting, 33],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Lipstickwriting_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Lipstickwriting"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1678;
export const Y = 78;
export const Height = 355;
export const Interactive= true
export const Width = 195;
export const Alpha = 1;
export let Scale = 1;

 
