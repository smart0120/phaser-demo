
        import _Maxine from './images/Maxine.png'
let paths = [
        ['HomeBedroom_Maxine', _Maxine, 16],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Maxine_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Maxine"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 526;
export const Y = 684;
export const Height = 140;
export const Interactive= true
export const Width = 162;
export const Alpha = 1;
export let Scale = 1;

 
