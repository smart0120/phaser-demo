
        import _Tier1Painting from './images/Tier1Painting.png'
let paths = [
        ['HomeBedroom_Tier1Painting', _Tier1Painting, 50],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Tier1Painting_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Tier1Painting"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 581;
export const Y = 510;
export const Height = 90;
export const Interactive= true
export const Width = 65;
export const Alpha = 1;
export let Scale = 1;

 
