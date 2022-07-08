
        import _Package from './images/Package.png'
let paths = [
        ['HomeKitchen_Package', _Package, 69],
      
    ]

      import {store} from "@/store";
 
   export const event_file = require('./Package_events.js');
 
 
 
export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "Package"
export const Id = 22;
export const GroupId = "-1,0,1,2"
export const Visible = true
export const X = 394;
export const Y = 516;
export const Height = 70;
export const Interactive= true
export const Width = 128;
export const Alpha = 1;
export let Scale = 1;

 
