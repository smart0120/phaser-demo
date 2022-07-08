
        import _Backposter from './images/Backposter.png'
let paths = [
        ['HomeHall_Backposter', _Backposter, 10],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Backposter_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Backposter"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 937;
export const Y = 345;
export const Height = 55;
export const Interactive= true
export const Width = 91;
export const Alpha = 1;
export let Scale = 1;

 
