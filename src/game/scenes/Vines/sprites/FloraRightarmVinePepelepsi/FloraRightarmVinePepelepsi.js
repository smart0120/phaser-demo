
        import _FloraRightarmVinePepelepsi from './images/FloraRightarmVinePepelepsi.png'
let paths = [
        ['Vines_FloraRightarmVinePepelepsi', _FloraRightarmVinePepelepsi, 49],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./FloraRightarmVinePepelepsi_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "FloraRightarmVinePepelepsi"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1106;
export const Y = 414;
export const Height = 339;
export const Interactive= true
export const Width = 299;
export const Alpha = 1;
export let Scale = 1;

 
