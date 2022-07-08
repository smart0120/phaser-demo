
        import _Floraposter from './images/Floraposter.png'
let paths = [
        ['SchoolLocker_Floraposter', _Floraposter, 3],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Floraposter_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Floraposter"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1021;
export const Y = 655;
export const Height = 283;
export const Interactive= true
export const Width = 234;
export const Alpha = 1;
export let Scale = 1;

 
