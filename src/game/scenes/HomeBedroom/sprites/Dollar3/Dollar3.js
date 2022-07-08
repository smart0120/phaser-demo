
        import _Dollar3 from './images/Dollar3.png'
let paths = [
        ['HomeBedroom_Dollar3', _Dollar3, 52],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Dollar3_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Dollar3"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1765;
export const Y = 356;
export const Height = 42;
export const Interactive= true
export const Width = 40;
export const Alpha = 1;
export let Scale = 1;

 
