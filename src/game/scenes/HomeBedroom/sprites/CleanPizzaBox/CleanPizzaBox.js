
        import _CleanPizzaBox from './images/CleanPizzaBox.png'
let paths = [
        ['HomeBedroom_CleanPizzaBox', _CleanPizzaBox, 48],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./CleanPizzaBox_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "CleanPizzaBox"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 99;
export const Y = 711;
export const Height = 222;
export const Interactive= true
export const Width = 140;
export const Alpha = 1;
export let Scale = 1;

 
