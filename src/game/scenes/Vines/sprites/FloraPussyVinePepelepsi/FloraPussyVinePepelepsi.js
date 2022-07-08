
        import _FloraPussyVinePepelepsi from './images/FloraPussyVinePepelepsi.png'
let paths = [
        ['Vines_FloraPussyVinePepelepsi', _FloraPussyVinePepelepsi, 127],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./FloraPussyVinePepelepsi_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "FloraPussyVinePepelepsi"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 731;
export const Y = 531;
export const Height = 76;
export const Interactive= true
export const Width = 364;
export const Alpha = 1;
export let Scale = 1;

 
