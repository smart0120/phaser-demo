
        import _Coin from './images/Coin.png'
let paths = [
        ['SchoolSecretLocker_Coin', _Coin, 7],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Coin_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Coin"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 809;
export const Y = 909;
export const Height = 85;
export const Interactive= true
export const Width = 104;
export const Alpha = 1;
export let Scale = 1;

 
