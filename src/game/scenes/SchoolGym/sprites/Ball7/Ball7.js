
        import _Ball7 from './images/Ball7.png'
let paths = [
        ['SchoolGym_Ball7', _Ball7, 21],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Ball7_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Ball7"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1637;
export const Y = 629;
export const Height = 28;
export const Interactive= true
export const Width = 35;
export const Alpha = 1;
export let Scale = 1;

 
