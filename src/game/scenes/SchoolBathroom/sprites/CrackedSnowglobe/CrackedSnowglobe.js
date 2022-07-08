
        import _CrackedSnowglobe from './images/CrackedSnowglobe.png'
let paths = [
        ['SchoolBathroom_CrackedSnowglobe', _CrackedSnowglobe, 9],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./CrackedSnowglobe_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "CrackedSnowglobe"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1528;
export const Y = 471;
export const Height = 83;
export const Interactive= true
export const Width = 72;
export const Alpha = 1;
export let Scale = 1;

 
