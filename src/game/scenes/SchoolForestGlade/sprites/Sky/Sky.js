
        import _Sky from './images/Sky.png'
let paths = [
        ['SchoolForestGlade_Sky', _Sky, 1],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Sky_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Sky"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 0;
export const Y = 0;
export const Height = 1080;
export const Interactive= true
export const Width = 1920;
export const Alpha = 1;
export let Scale = 1;

 
