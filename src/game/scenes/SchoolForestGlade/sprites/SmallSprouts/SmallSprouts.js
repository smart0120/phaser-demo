
        import _SmallSprouts from './images/SmallSprouts.png'
let paths = [
        ['SchoolForestGlade_SmallSprouts', _SmallSprouts, 23],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./SmallSprouts_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "SmallSprouts"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 835;
export const Y = 639;
export const Height = 54;
export const Interactive= true
export const Width = 321;
export const Alpha = 1;
export let Scale = 1;

 
