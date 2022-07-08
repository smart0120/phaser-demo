
        import _PizzaBox from './images/PizzaBox.png'
let paths = [
        ['HomeBedroom_PizzaBox', _PizzaBox, 47],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./PizzaBox_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "PizzaBox"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 475;
export const Y = 832;
export const Height = 240;
export const Interactive= true
export const Width = 262;
export const Alpha = 1;
export let Scale = 1;

 
