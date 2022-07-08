
        import _Sleepvine7Hp from './images/Sleepvine7Hp.png'
let paths = [
        ['Vines_Sleepvine7Hp', _Sleepvine7Hp, 65],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Sleepvine7Hp_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Sleepvine7Hp"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 1353;
export const Y = 455;
export const Height = 625;
export const Interactive= true
export const Width = 267;
export const Alpha = 1;
export let Scale = 1;

 
