
        import _D3 from './images/D3.png'
let paths = [
        ['HomeKitchen_D3', _D3, 6],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./D3_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "D3"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1457;
export const Y = 728;
export const Height = 75;
export const Interactive= true
export const Width = 128;
export const Alpha = 1;
export let Scale = 1;

 
