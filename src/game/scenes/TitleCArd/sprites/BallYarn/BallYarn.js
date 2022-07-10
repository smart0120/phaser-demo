
    const _ball_of_yarn = require('./images/ball_of_yarn.png')


let paths = [  ['TitleCArd_ball_of_yarn',_ball_of_yarn,0] ]
export const event_file = require('./BallYarn_events.js');

export default paths
export let Items = () => paths.map(a => {
    return {Name: a[0], Id: a[2]}
});
export const Name = "BallYarn"
export const Id = 22;
export const GroupId = ""
export const Visible = true
export const X = 305;
export const Y = 704;
export const Interactive= true
export const Alpha = 1;
export let Scale = 1;



