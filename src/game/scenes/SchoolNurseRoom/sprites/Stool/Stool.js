
        import _Stool from './images/Stool.png'
let paths = [
        ['SchoolNurseRoom_Stool', _Stool, 29],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Stool_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Stool"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 891;
export const Y = 901;
export const Height = 179;
export const Interactive= true
export const Width = 217;
export const Alpha = 1;
export let Scale = 1;

 
