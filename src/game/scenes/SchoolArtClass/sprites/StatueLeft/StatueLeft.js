
        import _StatueLeft from './images/StatueLeft.png'
let paths = [
        ['SchoolArtClass_StatueLeft', _StatueLeft, 20],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./StatueLeft_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "StatueLeft"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 610;
export const Y = 309;
export const Height = 396;
export const Interactive= true
export const Width = 131;
export const Alpha = 1;
export let Scale = 1;

 
