
        import _FloraLeftarmVinePepelepsi from './images/FloraLeftarmVinePepelepsi.png'
let paths = [
        ['Vines_FloraLeftarmVinePepelepsi', _FloraLeftarmVinePepelepsi, 113],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./FloraLeftarmVinePepelepsi_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "FloraLeftarmVinePepelepsi"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 197;
export const Y = 189;
export const Height = 564;
export const Interactive= true
export const Width = 873;
export const Alpha = 1;
export let Scale = 1;

 
