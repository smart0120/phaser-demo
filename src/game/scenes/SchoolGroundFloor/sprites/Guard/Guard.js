
        import _Guard from './images/Guard.png'
let paths = [
        ['SchoolGroundFloor_Guard', _Guard, 11],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Guard_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Guard"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1306;
export const Y = 448;
export const Height = 252;
export const Interactive= true
export const Width = 255;
export const Alpha = 1;
export let Scale = 1;

 
