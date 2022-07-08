
        import _Maxine from './images/Maxine.png'
let paths = [
        ['SchoolGroundFloor_Maxine', _Maxine, 52],
      
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
export const X = 839;
export const Y = 654;
export const Height = 363;
export const Interactive= true
export const Width = 217;
export const Alpha = 1;
export let Scale = 1;

 
