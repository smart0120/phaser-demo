
        import _KingOfSweets from './images/KingOfSweets.png'
let paths = [
        ['HomeBedroom_KingOfSweets', _KingOfSweets, 5],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./KingOfSweets_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "KingOfSweets"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 214;
export const Y = 152;
export const Height = 237;
export const Interactive= true
export const Width = 110;
export const Alpha = 1;
export let Scale = 1;

 
