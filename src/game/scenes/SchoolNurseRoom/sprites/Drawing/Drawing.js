
        import _Drawing from './images/Drawing.png'
let paths = [
        ['SchoolNurseRoom_Drawing', _Drawing, 11],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Drawing_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Drawing"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 556;
export const Y = 300;
export const Height = 101;
export const Interactive= true
export const Width = 75;
export const Alpha = 1;
export let Scale = 1;

 
