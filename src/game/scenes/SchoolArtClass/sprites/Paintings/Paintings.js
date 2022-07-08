
        import _Paintings from './images/Paintings.png'
let paths = [
        ['SchoolArtClass_Paintings', _Paintings, 8],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Paintings_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Paintings"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 672;
export const Y = 270;
export const Height = 396;
export const Interactive= true
export const Width = 1221;
export const Alpha = 1;
export let Scale = 1;

 
