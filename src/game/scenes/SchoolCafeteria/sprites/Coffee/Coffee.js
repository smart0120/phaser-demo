
        import _Coffee from './images/Coffee.png'
let paths = [
        ['SchoolCafeteria_Coffee', _Coffee, 7],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Coffee_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Coffee"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1423;
export const Y = 432;
export const Height = 84;
export const Interactive= true
export const Width = 80;
export const Alpha = 1;
export let Scale = 1;

 
