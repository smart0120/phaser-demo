
        import _Squid from './images/Squid.png'
let paths = [
        ['HomeKitchen_Squid', _Squid, 31],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Squid_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Squid"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 591;
export const Y = 301;
export const Height = 108;
export const Interactive= true
export const Width = 87;
export const Alpha = 1;
export let Scale = 1;

 
