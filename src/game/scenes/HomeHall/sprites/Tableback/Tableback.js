
        import _Tableback from './images/Tableback.png'
let paths = [
        ['HomeHall_Tableback', _Tableback, 23],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Tableback_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Tableback"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 684;
export const Y = 484;
export const Height = 124;
export const Interactive= true
export const Width = 89;
export const Alpha = 1;
export let Scale = 1;

 
