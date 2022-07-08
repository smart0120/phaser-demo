
        import _D1 from './images/D1.png'
let paths = [
        ['HomeKitchen_D1', _D1, 7],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./D1_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "D1"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1597;
export const Y = 684;
export const Height = 70;
export const Interactive= true
export const Width = 140;
export const Alpha = 1;
export let Scale = 1;

 
