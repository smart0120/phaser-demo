
        import _LinesRoutetoposition2 from './images/LinesRoutetoposition2.png'
let paths = [
        ['School1EastCorridor_LinesRoutetoposition2', _LinesRoutetoposition2, 69],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./LinesRoutetoposition2_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "LinesRoutetoposition2"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 912;
export const Y = 460;
export const Height = 659;
export const Interactive= true
export const Width = 77;
export const Alpha = 1;
export let Scale = 1;

 
