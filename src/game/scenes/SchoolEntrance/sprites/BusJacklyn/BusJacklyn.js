
        import _BusJacklyn from './images/BusJacklyn.png'
let paths = [
        ['SchoolEntrance_BusJacklyn', _BusJacklyn, 12],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./BusJacklyn_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "BusJacklyn"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1559;
export const Y = 703;
export const Height = 187;
export const Interactive= true
export const Width = 337;
export const Alpha = 1;
export let Scale = 1;

 
