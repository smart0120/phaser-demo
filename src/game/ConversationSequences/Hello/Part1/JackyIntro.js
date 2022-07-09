export async function JackIntro1(scene,sprites,textboxes){
    const {jackyTextbox,mcTextbox} = textboxes;
    const {jackSprite,mcSprite} = sprites;
    await jackyTextbox.Show("Hi");
    await mcTextbox.Show("Hi");
    await Simul(jackyTextbox.Show("are you new"),mcTextbox.Show("im new here")); //both at the same time
    await jackSprite.play('nervous')
    await jackyTextbox.Show("Can you read minds?")
    await Simul(jackSprite.play('laugh'),jackyTextbox.Show("that'd be cute")); //
}
// helper function to fire two events at the same time
export function Simul(){
    return Promise.all(arguments);
}
