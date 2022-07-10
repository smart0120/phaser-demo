
        import _OnTop from './images/OnTop.png'
let paths = [
        ['TitleCArd_OnTop', _OnTop, 11],

    ]

      import {store} from "@/store";

   export const event_file = require('./OnTop_events.js');



export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "OnTop"
export const Id = 22;
export const GroupId = "0,1,2,-1"
export const Visible = true
export const X = 835;
export const Y = 832;
export const Height = 248;
export const Interactive= false
export const Width = 419;
export const Alpha = 1;
export let Scale = 1;


