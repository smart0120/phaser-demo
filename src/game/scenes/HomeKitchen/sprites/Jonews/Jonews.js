
        import _Jonews from './images/Jonews.png'
let paths = [
        ['HomeKitchen_Jonews', _Jonews, 60],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Jonews_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Jonews"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 676;
export const Y = 391;
export const Height = 239;
export const Interactive= true
export const Width = 223;
export const Alpha = 1;
export let Scale = 1;

 
