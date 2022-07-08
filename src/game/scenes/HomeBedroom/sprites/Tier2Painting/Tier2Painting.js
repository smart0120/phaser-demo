
        import _Tier2Painting from './images/Tier2Painting.png'
let paths = [
        ['HomeBedroom_Tier2Painting', _Tier2Painting, 51],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Tier2Painting_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Tier2Painting"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 581;
export const Y = 510;
export const Height = 90;
export const Interactive= true
export const Width = 64;
export const Alpha = 1;
export let Scale = 1;

 
