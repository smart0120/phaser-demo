
        import _Counter from './images/Counter.png'
let paths = [
        ['HomeKitchen_Counter', _Counter, 17],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Counter_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Counter"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 575;
export const Y = 593;
export const Height = 395;
export const Interactive= true
export const Width = 809;
export const Alpha = 1;
export let Scale = 1;

 
