
        import _Todo from './images/Todo.png'
let paths = [
        ['SchoolLocker_Todo', _Todo, 9],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Todo_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Todo"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1130;
export const Y = 931;
export const Height = 75;
export const Interactive= true
export const Width = 153;
export const Alpha = 1;
export let Scale = 1;

 
