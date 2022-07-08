
        import _CatRun from './images/CatRun.png'
let paths = [
        ['SchoolArtClass_CatRun', _CatRun, 46],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./CatRun_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "CatRun"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1205;
export const Y = 687;
export const Height = 113;
export const Interactive= true
export const Width = 122;
export const Alpha = 1;
export let Scale = 1;

 
