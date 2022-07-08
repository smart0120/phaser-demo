
        import _Dragonfly from './images/Dragonfly.png'
let paths = [
        ['SchoolForestGlade_Dragonfly', _Dragonfly, 31],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Dragonfly_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Dragonfly"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1180;
export const Y = 807;
export const Height = 140;
export const Interactive= true
export const Width = 679;
export const Alpha = 1;
export let Scale = 1;

 
