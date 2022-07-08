
        import _Tire from './images/Tire.png'
let paths = [
        ['SchoolForestGlade_Tire', _Tire, 28],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Tire_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Tire"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = false
export const X = 78;
export const Y = 894;
export const Height = 99;
export const Interactive= true
export const Width = 231;
export const Alpha = 1;
export let Scale = 1;

 
