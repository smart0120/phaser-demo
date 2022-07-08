
        import _Dollar1 from './images/Dollar1.png'
let paths = [
        ['HomeHall_Dollar1', _Dollar1, 40],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Dollar1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Dollar1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1513;
export const Y = 727;
export const Height = 34;
export const Interactive= true
export const Width = 24;
export const Alpha = 1;
export let Scale = 1;

 
