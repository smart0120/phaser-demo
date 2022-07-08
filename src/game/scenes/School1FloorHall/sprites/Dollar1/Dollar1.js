
        import _Dollar1 from './images/Dollar1.png'
let paths = [
        ['School1FloorHall_Dollar1', _Dollar1, 48],
      
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
export const X = 104;
export const Y = 684;
export const Height = 17;
export const Interactive= true
export const Width = 23;
export const Alpha = 1;
export let Scale = 1;

 
