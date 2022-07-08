
        import _Paintings from './images/Paintings.png'
let paths = [
        ['School1WestCorridor_Paintings', _Paintings, 11],
      
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
export const X = 526;
export const Y = 227;
export const Height = 203;
export const Interactive= true
export const Width = 305;
export const Alpha = 1;
export let Scale = 1;

 
