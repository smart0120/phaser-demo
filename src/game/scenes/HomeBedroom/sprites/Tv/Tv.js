
        import _Tv from './images/Tv.png'
let paths = [
        ['HomeBedroom_Tv', _Tv, 21],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Tv_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Tv"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 148;
export const Y = 630;
export const Height = 246;
export const Interactive= true
export const Width = 253;
export const Alpha = 1;
export let Scale = 1;

 
