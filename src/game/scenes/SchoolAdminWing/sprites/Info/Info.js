
        import _Info from './images/Info.png'
let paths = [
        ['SchoolAdminWing_Info', _Info, 16],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Info_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Info"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1308;
export const Y = 15;
export const Height = 430;
export const Interactive= true
export const Width = 420;
export const Alpha = 1;
export let Scale = 1;

 
